# Guide d'utilisation API TheCat

Ce guide présente les principaux endpoints et exemples d'appel pour exploiter les capacités Gemini et IMAGEN via l'API TheCat.

## 1. Chat Gemini
- **Endpoint** : `POST /api/chat`
- **Payload** :
  ```json
  {
    "prompt": "Bonjour, peux-tu expliquer l'IA ?",
    "model": "gemini-2.5-flash"
  }
  ```
- **Réponse** :
  ```json
  {
    "text": "L'intelligence artificielle est..."
  }
  ```

## 2. Génération d'images IMAGEN
- **Endpoint** : `POST /api/images`
- **Payload** :
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
- **Réponse** :
  ```json
  {
    "images": [
      { "image": "<base64>", "format": "image/png" },
      { "image": "<base64>", "format": "image/png" }
    ]
  }
  ```

## 3. Streaming Gemini
- **Endpoint** : `POST /api/stream`
- **Payload** :
  ```json
  {
    "prompt": "Explique le streaming Gemini"
  }
  ```
- **Réponse** :
  - Flux SSE (text/event-stream) avec chunks textuels

## 4. Édition d'image Gemini
- **Endpoint** : `POST /api/edit`
- **Payload** :
  ```json
  {
    "imagePart": { "inlineData": { "data": "<base64>", "mimeType": "image/png" } },
    "prompt": "Ajoute un chapeau"
  }
  ```
- **Réponse** :
  ```json
  {
    "image": "<base64>"
  }
  ```

---

Pour plus de détails sur les modèles et paramètres, se référer à `codegen_instructions (1).md` et à la documentation Context7.
