import { ImageProps } from '../../Image/image.interface';
import { ProjectsTypes } from '../../../constants/projectTypes';
import { SCREENS } from '../../../navigation/constants';

export interface ProjectProps {
  type?: ProjectsTypes;
  name: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: ImageProps;
  isDarkContent: boolean;
  gradient: { [key: string]: string };
  link: SCREENS | string;
  isBgImgWrapper?: boolean;
}
