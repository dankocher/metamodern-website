import { ImageSizes } from '../../Image/image.interface';
import { ProjectTypes } from '../../../constants/projectTypes';

export interface ProjectProps {
  type?: ProjectTypes;
  name: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: ImageSizes;
  isDarkContent: boolean;
}
