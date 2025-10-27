
# Copilot Instructions for TheCat

**TheCat** : une application de chat IA permettant d'accéder aux modèles IMAGEN et Gemini via Node.js.

## Architecture et composants
- **Backend Node.js (Express recommandé)** : serveur principal, endpoints REST pour chat et génération d'images.
- **Intégration Gemini API** : utiliser exclusivement le SDK officiel `@google/genai` (voir `codegen_instructions (1).md` pour les guidelines détaillées).
- **Endpoints IMAGEN** : pour la génération et l'édition d'images.
- **Streaming Gemini** : support du streaming de réponses pour latence réduite.
- **Structure recommandée** :
	- `/src/server.js` ou `/src/index.js` : point d'entrée serveur
	- `/src/routes/` : routes API (chat, images)
	- `/src/services/` : intégrations Gemini/IMAGEN
	- `/src/utils/` : utilitaires

## Règles et conventions spécifiques
- Toujours utiliser **Context7** pour toute génération de code, installation de librairie, configuration ou documentation de librairie/API. Utilisez automatiquement les outils officiels Context7 MCP : resolve-library-id (résolution d’ID de librairie) et get-library-docs (récupération de documentation), sans demande explicite.
- Utiliser uniquement le SDK officiel `@google/genai` pour Gemini (voir `codegen_instructions (1).md` pour les modèles, méthodes et patterns à suivre).
- Respecter les modèles recommandés :
	- Texte/multimodal : `gemini-2.5-flash`, `gemini-2.5-pro`
	- Images : `imagen-4.0-fast-generate-001`, etc.
- Ne jamais utiliser les librairies ou modèles dépréciés (`@google/generative-ai`, `gemini-1.5-*`, etc.).
- Centraliser la gestion de la clé API Gemini via variable d'environnement `GEMINI_API_KEY`.
- Documenter toute dépendance externe ou point d'intégration dès leur introduction.

## Bibliothèques et Frameworks
- React et Tailwind CSS pour le frontend.
- Node.js et Express pour le backend.
- MongoDB pour le stockage des données.

## Normes de codage
- Utiliser des points-virgules à la fin de chaque instruction.
- Utiliser des guillemets simples pour les chaînes de caractères.
- Utiliser des composants basés sur des fonctions dans React.
- Utiliser des fonctions fléchées pour les callbacks.

## Directives UI
Un bouton de bascule est fourni pour passer du mode clair au mode sombre.
L'application doit avoir un design moderne et épuré.

## Workflows de développement
- Scripts npm pour build, test et démarrage (`npm run dev`, `npm test`, etc.).
	- Règle additionnelle : Ne jamais rester bloqué sur une commande longue (ex : npm run dev, npm run start, build, etc.). Toujours exécuter ces commandes en arrière-plan ou dans un terminal dédié, puis poursuivre les autres tâches (audit, debug, génération, etc.) sans attendre la fin du processus. Documenter cette pratique dans chaque réponse et commit associé.
- Variables d'environnement à définir dans `.env` : `GEMINI_API_KEY`, autres selon besoins IMAGEN.
- Tests unitaires recommandés avec Jest ou équivalent.
- Déploiement : documenter la procédure dès qu'elle est définie.

## Plan de développement (étapes)
	 - Structure des dossiers frontend recommandée :
		 - `/src/components` : composants React
		 - `/src/pages` : pages principales
		 - `/src/styles` : fichiers CSS/Tailwind pour uniformisation du design
		 - Séparer le code CSS dans `/src/styles` pour garantir la cohérence visuelle
	 - Gestion des erreurs :
		 - Frontend : afficher les erreurs via le composant `ErrorAlert`, validation des entrées utilisateur, gestion des erreurs réseau/API
		 - Backend : renvoyer des réponses structurées (JSON) avec message et code d’erreur, loguer les erreurs
	 - Accessibilité (a11y) : utiliser des labels ARIA, navigation clavier, contraste adapté
	 - Responsive design : utiliser Tailwind CSS pour adapter l’interface à tous les écrans
	 - Exemple de format de données échangées (schéma JSON) :
		 ```json
		 {
			 "prompt": "Un chat sur la lune",
			 "model": "imagen-4.0-fast-generate-001",
			 "params": {
				 "numberOfImages": 2,
				 "outputMimeType": "image/png"
			 }
		 }
		 ```
	 - Se référer au fichier `codegen_instructions (1).md` pour les patterns d’intégration Gemini et l’utilisation des modèles.
1. Définir l'architecture Node.js (structure dossiers, point d'entrée serveur)
2. Installer les librairies Node.js à jour via Context7 (`@google/genai`, Express, etc.)
3. Créer le serveur Node.js de base (Express)
4. Implémenter l'intégration Gemini API selon les guidelines fournies
5. Ajouter endpoints pour IMAGEN et streaming Gemini
6. Créer une interface web UI frontend (React + Tailwind CSS)
		 - Permettre à l'utilisateur de choisir le modèle Gemini ou IMAGEN utilisé pour chaque requête.
		 - Afficher dynamiquement les paramètres spécifiques au modèle sélectionné (ex : pour IMAGEN, proposer le nombre d'images à générer, le format de sortie (png/jpeg), etc.).
		 - Prévoir l'ajout de nouveaux paramètres de réglage à venir selon l'évolution des modèles et besoins utilisateurs.
		 - Composants React principaux à prévoir :
			 - `ModelSelector` : sélection du modèle (Gemini/IMAGEN) et affichage des paramètres dynamiques.
			 - `ChatBox` : affichage des messages et interface de chat.
			 - `MessageInput` : saisie des messages utilisateur.
			- `ImageGallery` : affichage des images générées (IMAGEN) et des prompts correspondants.
			 - `ImageSettings` : réglages spécifiques pour la génération d'images (nombre, format, etc.).
			 - `ThemeToggle` : bouton de bascule clair/sombre.
			 - `Loader` : affichage du streaming Gemini ou du chargement d'images.
			 - `ErrorAlert` : gestion et affichage des erreurs.
7. Documenter les workflows de build, test et déploiement
8. Créer des exemples d'utilisation (chat, image, multimodal)

## Exemples et documentation
- Se référer à `codegen_instructions (1).md` pour tous les exemples d'intégration Gemini (initialisation, modèles, streaming, chat, images, etc.).
- Ajouter des exemples concrets dans `/src/examples/` dès qu'ils sont disponibles.

---

*Ce fichier doit être mis à jour à chaque évolution significative du projet pour garantir la productivité des agents IA.*
