// Importation des modules nécessaires depuis React et axios
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
// Création d'un contexte pour les cotisations
const CotisationProvider = createContext();
export const useCotisation = () => useContext(CotisationProvider);

// Définition du fournisseur de contexte pour les cotisations
const CotisationContext = ({ children }) => {
    // Déclaration d'un état pour stocker les cotisations
    const [cotisations, setCotisations] = useState([]);

    // Utilisation de useEffect pour récupérer les cotisations lors du montage du composant
    useEffect(() => {
        const fetchCotisations = async () => {
            try {
                // Requête GET pour récupérer les cotisations depuis l'API
                const response = await axios.get(process.env.REACT_APP_API_URL +'/api/cotisation/');
                // Mise à jour de l'état avec les données récupérées
                setCotisations(response.data);
            } catch (error) {
                // Affichage de l'erreur en cas d'échec de la requête
                console.error("Erreur lors de la récupération des Cotisations ",error);
            }
        };

        // Appel de la fonction pour récupérer les cotisations
        fetchCotisations();
    }, []);

    // Fonction pour récupérer une cotisation par son ID
    const getCotisationById = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cotisation/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'utilisateur",error);
        }
    };

    // Fonction pour créer une nouvelle cotisation
    const createCotisation = async (cotisationData) => {
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL +'/api/cotisation/', cotisationData);
            return response.data;
        } catch (error) {
            console.error("Erreur de la creation de la cotisation",error);
        }
    };

    // Fonction pour mettre à jour une cotisation existante
    const updateCotisation = async (id, cotisationData) => {
        try {
            const response = await axios.put(process.env.REACT_APP_API_URL +`/api/cotisation/${id}`, cotisationData);
            return response.data;
        } catch (error) {
            console.error("Erreur de mise à jour cotisation",error);
        }
    };

    // Fonction pour supprimer une cotisation
    const deleteCotisation = async (id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_URL +`/api/cotisation/${id}`);
        } catch (error) {
            console.error("Erreur suppression de la cotisation",error);
        }
    };

    // Valeur du contexte contenant les cotisations et les fonctions CRUD
    const cotisationContextValue = {
        cotisations,
        getCotisationById,
        createCotisation,
        updateCotisation,
        deleteCotisation
    };

    // Retourne le fournisseur de contexte avec les enfants passés en props
    return (
        <CotisationProvider.Provider value={cotisationContextValue}>
            {children}
        </CotisationProvider.Provider>
    );
};

// Exportation du contexte et du fournisseur de contexte
export { CotisationContext  };