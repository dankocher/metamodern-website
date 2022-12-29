import img1 from '../../../assets/images/Vlad.webp';
import img2 from '../../../assets/images/Vladislave.webp';
import img3 from '../../../assets/images/Kristina.webp';
import img4 from '../../../assets/images/Vadim.webp';

export const workerCards: Array<{
  name: string;
  position: string;
  photo: string;
  index: number;
}> = [
  {
    index: 0,
    name: 'Vladislav',
    position: 'UX/UI Designer',
    photo: img1,
  },
  {
    index: 1,
    name: 'Vladislav',
    position: 'Game Designer',
    photo: img2,
  },
  {
    index: 2,
    name: 'Kristina',
    position: 'Head of the Flutter Department',
    photo: img3,
  },
  {
    index: 3,
    name: 'Vadim',
    position: 'Owner',
    photo: img4,
  },
  // {
  //   index: 4,
  //   name: 'Arthur',
  //   position: 'Co-owner',
  //   photo:
  //     'https://s3.amazonaws.com/profile_photos/1135280782070157.1201606095988084.IylntHJbdjamdEPE4dSy_huge.jpeg',
  // },
  // {
  //   index: 5,
  //   name: 'Daniel',
  //   position: 'Big Boss - Team Lead',
  //   photo:
  //     'https://s3.amazonaws.com/profile_photos/1111124617037353.1111124617037361.2TFE3v8WWUqD1QoSdZ5G_huge.jpeg',
  // },
];
