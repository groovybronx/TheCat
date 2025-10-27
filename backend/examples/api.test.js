// Tests unitaires des endpoints API TheCat


process.env.GEMINI_API_KEY = 'test-key';
const request = require('supertest');
const app = require('../server');

// Mock du SDK Gemini/IMAGEN
jest.mock('@google/genai', () => {
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => ({
      models: {
        generateContent: jest.fn().mockResolvedValue({ text: 'Réponse mockée', candidates: [{ content: { parts: [{ inlineData: { data: 'image-mock' } }] } }] }),
        generateImages: jest.fn().mockResolvedValue({ generatedImages: [{ image: { imageBytes: 'image-mock' }, format: 'image/png' }] }),
        generateContentStream: jest.fn().mockReturnValue((async function* () { yield { text: 'Stream mocké' }; })()),
      }
    }))
  };
});

describe('API TheCat', () => {
  it('POST /api/chat doit retourner une réponse Gemini', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ prompt: 'Bonjour' });
    expect(res.statusCode).toBe(200);
    expect(res.body.text).toBeDefined();
  });

  it('POST /api/images doit retourner des images', async () => {
    const res = await request(app)
      .post('/api/images')
      .send({ prompt: 'Un chat sur la lune' });
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.images)).toBe(true);
  });

  it('POST /api/stream doit streamer une réponse Gemini', async () => {
    const res = await request(app)
      .post('/api/stream')
      .send({ prompt: 'Explique le streaming' });
    expect(res.statusCode).toBe(200);
  });

  it('POST /api/edit doit retourner une image éditée', async () => {
    const res = await request(app)
      .post('/api/edit')
      .send({ imagePart: { inlineData: { data: '...', mimeType: 'image/png' } }, prompt: 'Ajoute un chapeau' });
    expect(res.statusCode).toBe(200);
    expect(res.body.image).toBeDefined();
  });
});
