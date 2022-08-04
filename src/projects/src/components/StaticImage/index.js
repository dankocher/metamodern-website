const StaticImage = ({ src, alt, className }) => {
  return (
    <div
      className={className}
      style={{ position: 'relative', display: 'flex', height: '100%' }}
    >
      <img alt={alt} src={src} />
    </div>
  );
};

export default StaticImage;
