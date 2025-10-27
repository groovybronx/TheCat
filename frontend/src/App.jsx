import React, { useState } from 'react';
import ModelSelector from './components/ModelSelector.jsx';
import ChatBox from './components/ChatBox.jsx';
import MessageInput from './components/MessageInput.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Loader from './components/Loader.jsx';
import ErrorAlert from './components/ErrorAlert.jsx';
import './styles/tailwind.css';

function App() {
  const [dark, setDark] = useState(false);
  // Ajoutez ici la logique d'état pour le chat, les images, les erreurs, etc.

  return (
    <div className={dark ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-gray-50 text-gray-900 min-h-screen'}>
      <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />
      <div className='max-w-2xl mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8'>TheCat</h1>
        <ModelSelector />
        <ErrorAlert message={null} />
        <ChatBox />
        <MessageInput />
        <ImageGallery images={[]} prompts={[]} />
        <Loader />
      </div>
    </div>
  );
}

export default App;
