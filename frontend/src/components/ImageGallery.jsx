import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images = [], prompts = [] }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-4'>
      {images.map((img, idx) => (
        <div key={idx} className='border rounded p-2 bg-white'>
          <img src={`data:${img.format};base64,${img.image}`} alt={`Générée ${idx + 1}`} className='w-full h-auto mb-2' />
          <div className='text-xs text-gray-600'>Prompt : {prompts[idx] || ''}</div>
        </div>
      ))}
    </div>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      format: PropTypes.string,
      image: PropTypes.string
    })
  ),
  prompts: PropTypes.arrayOf(PropTypes.string)
};
