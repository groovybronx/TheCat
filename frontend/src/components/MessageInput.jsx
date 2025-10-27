import React from 'react';

const MessageInput = () => {
  // ... logique de saisie et envoi du message utilisateur
  return (
    <form className='flex gap-2'>
      <input type='text' className='flex-1 border rounded px-2 py-1' placeholder='Votre message...' />
      <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded'>Envoyer</button>
    </form>
  );
};

export default MessageInput;
