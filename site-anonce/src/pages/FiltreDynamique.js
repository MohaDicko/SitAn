// FilterComponent.jsx
import React, { useState } from 'react';
import {
  TextField, MenuItem, Button, FormControl, InputLabel, Select,
  Checkbox, FormControlLabel, Grid, InputAdornment, FormGroup
} from '@mui/material';

const FiltreDynamique = ({ category, onFilter }) => {
  const [filters, setFilters] = useState({
    // Immobilier
    type: '', location: '', priceMin: '', priceMax: '', surfaceMin: '', surfaceMax: '',
    rooms: '', state: '', yearBuilt: '', hasBalcony: false, hasGarden: false, hasGarage: false,
    heatingType: '', energyClass: '', emissionClass: '', accessibility: false, security: false,
    view: '', orientation: '', charges: '', taxes: '', saleType: '', specialFeatures: [],

    // Automobile
    make: '', model: '', yearMin: '', yearMax: '', priceMin: '', priceMax: '', mileageMin: '', mileageMax: '',
    fuelType: '', transmission: '', color: '', bodyType: '', hasWarranty: false,

    // Électronique
    category: '', brand: '', model: '', priceMin: '', priceMax: '', condition: '', warranty: false,

    // Marché
    productType: '', priceMin: '', priceMax: '', condition: '', sellerLocation: '', ratingMin: '', ratingMax: '', category: '',

    // Travail
    jobTitle: '', industry: '', location: '', salaryMin: '', salaryMax: '', contractType: '', experienceLevel: '',
    companySize: '', remote: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    onFilter(filters);
  };

  return (
    <div className="p-4 space-y-4 bg-gray-50 rounded-lg shadow-lg">
      {category === 'immobilier' && (
        <>
          {/* Immobilier Filters */}
          <FormControl fullWidth>
            <InputLabel>Type de Propriété</InputLabel>
            <Select
              name="type"
              value={filters.type}
              onChange={handleChange}
              label="Type de Propriété"
            >
              <MenuItem value="Appartement">Appartement</MenuItem>
              <MenuItem value="Maison">Maison</MenuItem>
              <MenuItem value="Villa">Villa</MenuItem>
              <MenuItem value="Studio">Studio</MenuItem>
              <MenuItem value="Loft">Loft</MenuItem>
              <MenuItem value="Duplex">Duplex</MenuItem>
              <MenuItem value="Terrain">Terrain</MenuItem>
              <MenuItem value="Immeuble">Immeuble</MenuItem>
              <MenuItem value="Maison de ville">Maison de ville</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="location"
            label="Localisation"
            value={filters.location}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="priceMin"
                label="Prix Minimum"
                type="number"
                value={filters.priceMin}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="priceMax"
                label="Prix Maximum"
                type="number"
                value={filters.priceMax}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="surfaceMin"
                label="Surface Minimum (m²)"
                type="number"
                value={filters.surfaceMin}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="surfaceMax"
                label="Surface Maximum (m²)"
                type="number"
                value={filters.surfaceMax}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <TextField
            name="rooms"
            label="Nombre de Pièces"
            type="number"
            value={filters.rooms}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />

          <TextField
            name="yearBuilt"
            label="Année de Construction"
            type="number"
            value={filters.yearBuilt}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />

          <FormControl fullWidth>
            <InputLabel>Type de Chauffage</InputLabel>
            <Select
              name="heatingType"
              value={filters.heatingType}
              onChange={handleChange}
              label="Type de Chauffage"
            >
              <MenuItem value="Central">Central</MenuItem>
              <MenuItem value="Électrique">Électrique</MenuItem>
              <MenuItem value="Gaz">Gaz</MenuItem>
              <MenuItem value="Pompe à chaleur">Pompe à chaleur</MenuItem>
              <MenuItem value="Chauffage au sol">Chauffage au sol</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Classe Énergétique</InputLabel>
            <Select
              name="energyClass"
              value={filters.energyClass}
              onChange={handleChange}
              label="Classe Énergétique"
            >
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="G">G</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Émissions de GES</InputLabel>
            <Select
              name="emissionClass"
              value={filters.emissionClass}
              onChange={handleChange}
              label="Émissions de GES"
            >
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="G">G</MenuItem>
            </Select>
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="accessibility"
                  checked={filters.accessibility}
                  onChange={handleChange}
                />
              }
              label="Accessibilité pour personnes handicapées"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="security"
                  checked={filters.security}
                  onChange={handleChange}
                />
              }
              label="Sécurité (alarme, interphone, vidéophone)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hasBalcony"
                  checked={filters.hasBalcony}
                  onChange={handleChange}
                />
              }
              label="Balcon / Terrasse"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hasGarden"
                  checked={filters.hasGarden}
                  onChange={handleChange}
                />
              }
              label="Jardin / Cour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hasGarage"
                  checked={filters.hasGarage}
                  onChange={handleChange}
                />
              }
              label="Garage / Parking"
            />
          </FormGroup>

          <FormControl fullWidth>
            <InputLabel>Vue</InputLabel>
            <Select
              name="view"
              value={filters.view}
              onChange={handleChange}
              label="Vue"
            >
              <MenuItem value="Mer">Vue sur la mer</MenuItem>
              <MenuItem value="Montagne">Vue sur la montagne</MenuItem>
              <MenuItem value="Dégagée">Vue dégagée</MenuItem>
              <MenuItem value="Pas de vue">Pas de vue</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Orientation</InputLabel>
            <Select
              name="orientation"
              value={filters.orientation}
              onChange={handleChange}
              label="Orientation"
            >
              <MenuItem value="Nord">Nord</MenuItem>
              <MenuItem value="Sud">Sud</MenuItem>
              <MenuItem value="Est">Est</MenuItem>
              <MenuItem value="Ouest">Ouest</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Appliquer les filtres
          </Button>
        </>
      )}
    </div>
  );
};

export default FiltreDynamique;