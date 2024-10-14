import React from 'react';

const First = () => {
  return (
    <div   className='relative h-screen w-screen'>
      <div className='absolute inset-0 bg-[url("https://www.chipsta.co.uk/images/Header_Image_compressed.jpg")] bg-cover bg-center'></div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white" 
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0%)'
        }}>
      </div>
    </div>
  );
};

export default First;
