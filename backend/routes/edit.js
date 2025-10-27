// Endpoint pour l'édition d'image avec Gemini
const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/', async (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Clé GEMINI_API_KEY manquante' });
  }
  try {
    const { imagePart, prompt, model = 'gemini-2.5-flash-image-preview', params = {} } = req.body;
    if (!imagePart || !prompt) {
      return res.status(400).json({ error: 'Les champs "imagePart" et "prompt" sont requis.' });
    }
    const response = await ai.models.generateContent({
      model,
      contents: [imagePart, prompt],
      config: params
    });
    const parts = response.candidates?.[0]?.content?.parts || [];
    const editedImage = parts.find(p => p.inlineData)?.inlineData?.data || null;
    res.json({ image: editedImage });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erreur édition image Gemini' });
  }
});

module.exports = router;
