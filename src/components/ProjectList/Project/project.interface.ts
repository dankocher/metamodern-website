import { ImageSizes } from "../../Image/image.interface";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  bgImage: ImageSizes;
  isDarkContent: boolean;
}
