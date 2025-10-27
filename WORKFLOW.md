# Documentation des workflows build, test et déploiement

## Build & Démarrage
- Installer les dépendances :
  ```sh
  npm install
  ```
- Démarrer le serveur en développement :
  ```sh
  npm run dev
  ```
- Démarrer le serveur en production :
  ```sh
  npm start
  ```

## Tests
- Lancer les tests unitaires (Jest ou équivalent) :
  ```sh
  npm test
  ```
- Les tests sont situés dans `/src/examples/api.test.js`.

## Variables d'environnement
- Définir la clé Gemini dans `.env` :
  ```env
  GEMINI_API_KEY=your_api_key
  ```
- Ajouter d'autres variables selon les besoins IMAGEN.

## Déploiement
- Documenter la procédure dès qu'elle est définie (ex : Docker, Vercel, etc.).

---

Se référer à la documentation Context7 et au fichier `codegen_instructions (1).md` pour l'intégration Gemini et les patterns recommandés.
