// Endpoint pour le streaming Gemini
const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/', async (req, res) => {
  try {
    const { prompt, model = 'gemini-2.5-flash', params = {} } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Le champ "prompt" est requis.' });
    }
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.flushHeaders();
    let clientClosed = false;
    res.on('close', () => {
      clientClosed = true;
    });
    const stream = await ai.models.generateContentStream({
      model,
      contents: prompt,
      config: params
    });
    for await (const chunk of stream) {
      if (clientClosed) break;
      if (chunk.text) {
        res.write(`data: ${chunk.text}\n\n`);
      }
    }
    res.end();
  } catch (error) {
    res.write(`data: [ERROR] ${error.message || 'Erreur streaming Gemini'}\n\n`);
    res.end();
  }
});

module.exports = router;
