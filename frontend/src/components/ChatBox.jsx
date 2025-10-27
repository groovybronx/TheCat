import React from 'react';

const ChatBox = () => {
  // ... logique d'affichage des messages
  return (
    <div className='border rounded p-4 h-64 overflow-y-auto bg-white mb-4'>
      {/* Messages du chat */}
  <div className='text-gray-500'>Aucun message pour l&apos;instant.</div>
    </div>
  );
};

export default ChatBox;
