import React from 'react';

const ModelSelector = () => {
  // ... logique de sélection du modèle et affichage des paramètres dynamiques
  return (
    <div className='mb-4'>
      <label className='block font-semibold mb-2'>Modèle</label>
      <select className='border rounded px-2 py-1'>
        <option value='gemini-2.5-flash'>Gemini 2.5 Flash</option>
        <option value='gemini-2.5-pro'>Gemini 2.5 Pro</option>
        <option value='imagen-4.0-fast-generate-001'>IMAGEN 4.0 Fast</option>
      </select>
      {/* Affichage des paramètres dynamiques selon le modèle sélectionné */}
    </div>
  );
};

export default ModelSelector;
