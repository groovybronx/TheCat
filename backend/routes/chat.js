// Routes pour le chat Gemini
const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/', async (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Clé GEMINI_API_KEY manquante' });
  }
  try {
    const { prompt, model = 'gemini-2.5-flash', params = {} } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Le champ "prompt" est requis.' });
    }
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: params
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error('[Gemini API]', error);
    let message = error.message || 'Erreur Gemini API';
    if (message.includes('API key') || message.includes('unauthorized')) {
      message = 'Clé GEMINI_API_KEY invalide ou non autorisée';
    }
    res.status(500).json({ error: message });
  }
});

module.exports = router;
