import React from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = '/images/placeholder.png',
  width,
  height,
  className = '',
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src);
  
  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
      loading="lazy"
    />
  );
}
