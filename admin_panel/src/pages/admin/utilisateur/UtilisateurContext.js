import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const UtilisateurContext = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Récupérer tous les utilisateurs
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/api/getAllUsers"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs", error);
    }
  };

  // Ajouter un utilisateur
  const addUser = async (user) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/register",
        user
      );
      setUsers((prev) => [...prev, response.data.user]);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur", error);
    }
  };

  // Mettre à jour un utilisateur
  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/updateUser/${id}`,
        updatedUser
      );
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, ...updatedUser } : user
        )
      );
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur", error);
    }
  };

  // Supprimer un utilisateur
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/deleteUser/${id}`,
        // { Authorization: "Bearer " + localStorage.getItem("token") }
      );
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </AdminContext.Provider>
  );
};
