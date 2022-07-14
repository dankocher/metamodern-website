import { FC } from 'react';
import { ImageSizes } from './image.interface';

const Image: FC<
  { images: ImageSizes } & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ images, src, srcSet: _, ...props }) => {
  const srcSet = images != null ? `${images.x1} 1x, ${images.x2} 2x` : null;
  const defaultImage = src ?? images?.x1 ?? null;
  return <img src={defaultImage} srcSet={srcSet} {...props} />;
};

export default Image;
