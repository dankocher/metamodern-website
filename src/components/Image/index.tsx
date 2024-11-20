import { FC, ImgHTMLAttributes } from "react";
import { ImageProps } from "./image.interface";

const Image: FC<ImageProps & ImgHTMLAttributes<HTMLImageElement>> = ({
  name,
  alt,
  ...props
}) => {
  const imagePath = (suffix: string) => {
    try {
      return require(`../../assets/images/${name}${suffix}.png`);
    } catch {
      return null;
    }
  };

  const image = imagePath('');
  const image2x = imagePath('@2x');
  const image3x = imagePath('@3x');

  const srcSet = [
    image ? `${image} 1x` : null,
    image2x ? `${image2x} 2x` : null,
    image3x ? `${image3x} 3x` : null,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <img
      src={image}
      srcSet={srcSet || undefined}
      alt={alt ?? name}
      {...props}
    />
  );
};

export default Image;
