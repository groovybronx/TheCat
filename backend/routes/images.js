// Routes pour la génération d'images avec IMAGEN
const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/', async (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Clé GEMINI_API_KEY manquante' });
  }
  try {
    const { prompt, model = 'imagen-4.0-fast-generate-001', params = {} } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Le champ "prompt" est requis.' });
    }
    const response = await ai.models.generateImages({
      model,
      prompt,
      config: params
    });
    const images = (response.generatedImages || []).map(img => ({
      image: img.image?.imageBytes || null,
      format: params.outputMimeType || 'image/png'
    }));
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erreur IMAGEN API' });
  }
});

module.exports = router;
