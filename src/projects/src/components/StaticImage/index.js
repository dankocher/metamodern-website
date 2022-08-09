import { useState } from 'react';

const StaticImage = ({ src, alt, className, ...props }) => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        height: '100%',
      }}
    >
      <img
        style={{ opacity: opacity, transition: 'opacity .25s linear' }}
        alt={alt}
        src={src}
        {...props}
        onLoad={() => setOpacity(1)}
      />
    </div>
  );
};

export default StaticImage;
