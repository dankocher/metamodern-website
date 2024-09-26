const getWallsData = (containerW, containerH, offsetX, offsetY) => {
    console.log(offsetX, offsetY)
  let wallWidth = 100,
    wallOffset = 50;
  let wallopts = {
    isStatic: true,
    restitution: 0.8,
    friction: 1,
  };
  let wallAngleOpts = {
    isStatic: true,
    angle: 0.7854,
  };
  return [
    {
      x: containerW / 2 - offsetX,
      y: containerH + wallOffset-offsetY,
      w: containerW + wallWidth * 2,
      h: wallWidth,
      opts: wallopts,
    },

    {
      x: containerW / 2- offsetX,
      y: -wallOffset-offsetY,
      w: containerW + wallWidth * 2,
      h: wallWidth,
      opts: wallopts,
    },
    {
      x: containerW + wallOffset- offsetX,
      y: containerH / 2-offsetY,
      w: wallWidth,
      h: containerH,
      opts: wallopts,
    },
    {
      x: -wallOffset- offsetX,
      y: containerH / 2-offsetY,
      w: wallWidth,
      h: containerH,
      opts: wallopts,
    },

    { x: 0- offsetX, y: 0-offsetY, w: wallWidth / 2, h: wallWidth * 2, opts: wallAngleOpts },

    {
      x: containerW- offsetX,
      y: 0-offsetY,
      w: wallWidth / 2,
      h: wallWidth * 2,
      opts: {
        ...wallAngleOpts,
        angle: -wallAngleOpts.angle,
      },
    },
    {
      x: containerW- offsetX,
      y: containerH-offsetY,
      w: wallWidth / 2,
      h: wallWidth * 2,
      opts: wallAngleOpts,
    },
    {
      x: 0- offsetX,
      y: containerH-offsetY,
      w: wallWidth / 2,
      h: wallWidth * 2,
      opts: {
        ...wallAngleOpts,
        angle: -wallAngleOpts.angle,
      },
    },
  ];
};

export default getWallsData;
