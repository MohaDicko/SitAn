const { Client } = require('pg');

// Créer un client PostgreSQL
const client = new Client({
  user: 'votre_utilisateur',
  host: 'localhost',
  database: 'nom_de_votre_base',
  password: 'votre_mot_de_passe',
  port: 5432, // Le port par défaut est 5432
});

// Connexion à la base de données
client.connect()
  .then(() => console.log('Connecté à PostgreSQL'))
  .catch(err => console.error('Erreur de connexion', err.stack));

// Exécuter une requête
client.query('SELECT * FROM votre_table', (err, res) => {
  if (err) {
    console.error('Erreur lors de la requête', err.stack);
  } else {
    console.log('Résultats:', res.rows);
  }

  // Fermer la connexion
  client.end();
});
