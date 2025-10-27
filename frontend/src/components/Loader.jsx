import React from 'react';

const Loader = () => (
  <div className='flex items-center justify-center py-4'>
    <span className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600'></span>
    <span className='ml-2 text-blue-600'>Chargement...</span>
  </div>
);

export default Loader;
