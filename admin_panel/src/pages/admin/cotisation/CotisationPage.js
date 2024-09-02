import React, { useState } from 'react';
import { useCotisation } from './CotisationContext';
//import { useAdmin } from "../../layouts/AdminLayout/Context";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';


function CotisationPage() {
    const { cotisations, createCotisation, updateCotisation, deleteCotisation } = useCotisation();
    const [newCotisation, setNewCotisation] = useState({ montant: '', date_paiement: '', statut_paiement: '' });
    const [updateCotisationId, setUpdateCotisationId] = useState(null);
    const [updateCotisationData, setUpdateCotisationData] = useState({ montant: '', date_paiement: '', statut_paiement: '' });

    const handleCreate = () => {
        createCotisation(newCotisation);
        setNewCotisation({ montant: '', date_paiement: '', statut_paiement: '' });
    };

    const handleUpdate = () => {
        updateCotisation(updateCotisationId, updateCotisationData);
        setUpdateCotisationId(null);
        setUpdateCotisationData({ montant: '', date_paiement: '', statut_paiement: '' });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Créer une nouvelle cotisation</h2>
            <div className="mb-4">
                <TextField
                    label="Montant"
                    variant="outlined"
                    fullWidth
                    value={newCotisation.montant}
                    onChange={(e) => setNewCotisation({ ...newCotisation, montant: e.target.value })}
                    className="mb-2"
                />
                <TextField
                    label="Date de paiement"
                    variant="outlined"
                    fullWidth
                    value={newCotisation.date_paiement}
                    onChange={(e) => setNewCotisation({ ...newCotisation, date_paiement: e.target.value })}
                    className="mb-2"
                />
                <TextField
                    label="Statut de paiement"
                    variant="outlined"
                    fullWidth
                    value={newCotisation.statut_paiement}
                    onChange={(e) => setNewCotisation({ ...newCotisation, statut_paiement: e.target.value })}
                    className="mb-2"
                />
                <Button variant="contained" color="primary" onClick={handleCreate}>
                    Créer
                </Button>
            </div>

            <h2 className="text-2xl font-bold mb-4">Liste des cotisations</h2>
            <div>
                {cotisations.map((item) => (
                    <Card key={item._id} className="mb-4">
                        <CardContent>
                            <Typography variant="h6">Montant: {item.montant}</Typography>
                            <Typography variant="body2">Date de paiement: {item.date_paiement}</Typography>
                            <Typography variant="body2">Statut de paiement: {item.statut_paiement}</Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => deleteCotisation(item._id)}
                                className="mt-2"
                            >
                                Supprimer
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {updateCotisationId && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-4">Mettre à jour la cotisation</h2>
                    <TextField
                        label="Montant"
                        variant="outlined"
                        fullWidth
                        value={updateCotisationData.montant}
                        onChange={(e) => setUpdateCotisationData({ ...updateCotisationData, montant: e.target.value })}
                        className="mb-2"
                    />
                    <TextField
                        label="Date de paiement"
                        variant="outlined"
                        fullWidth
                        value={updateCotisationData.date_paiement}
                        onChange={(e) => setUpdateCotisationData({ ...updateCotisationData, date_paiement: e.target.value })}
                        className="mb-2"
                    />
                    <TextField
                        label="Statut de paiement"
                        variant="outlined"
                        fullWidth
                        value={updateCotisationData.statut_paiement}
                        onChange={(e) => setUpdateCotisationData({ ...updateCotisationData, statut_paiement: e.target.value })}
                        className="mb-2"
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                        Mettre à jour
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CotisationPage;