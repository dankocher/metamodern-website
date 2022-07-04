import { ImageSizes } from '../../Image/image.interface';
import { ProjectsTypes } from '../../../constants/projectTypes';

export interface ProjectProps {
  type?: ProjectsTypes;
  name: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: ImageSizes;
  isDarkContent: boolean;
}
