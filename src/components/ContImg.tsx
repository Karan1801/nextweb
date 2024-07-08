import React from 'react';
import Image from 'next/image';

interface ContentImageProps {
  imageSrc: string;
  imageAlt: string;
  imageClass: string;
  contentHead: string;
  contentPara: React.ReactNode;
}

const ContentImage: React.FC<ContentImageProps> = ({ imageSrc, imageAlt, contentHead, contentPara, imageClass }) => {
  return (
    <div className="flex items-center px-4 md:px-10 lg:px-20 2xl:px-40 py-12">
      <div className={imageClass}>
      <Image src={imageSrc} alt={imageAlt} width={300} height={300}/>
      </div>
      <div className="text-white lg:w-1/2">
        <h2 className='text-3xl md:text-4xl mb-4'>{contentHead}</h2>
        <p>{contentPara}</p>
      </div>
    </div>
  );
};

export default ContentImage;
