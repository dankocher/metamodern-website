import { ImageSizes } from "../../Image/image.interface";

export interface ProjectProps {
  name: string;
  title: string;
  description: string;
  tags: string[];
  bgImage: ImageSizes;
  isDarkContent: boolean;
}
