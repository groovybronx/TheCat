// Point d'entrée principal du serveur Node.js
// Utilise Express pour la gestion des routes

const express = require('express');
const app = express();

app.use(express.json());

// Exemple de route racine
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur TheCat API !' });
});

// Montage des routes spécifiques
const chatRoutes = require('./routes/chat');
const imagesRoutes = require('./routes/images');
const editRoutes = require('./routes/edit');
const streamRoutes = require('./routes/stream');

app.use('/api/chat', chatRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/edit', editRoutes);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur TheCat démarré sur le port ${PORT}`);
  });
}

module.exports = app;
