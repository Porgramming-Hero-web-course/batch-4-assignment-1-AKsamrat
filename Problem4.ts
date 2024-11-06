{
  //

  type Circle = {
    shape: 'circle';
    radius: number;
  };
  type Rectangle = {
    shape: 'rectangle';
    length: number;
    width: number;
  };

  const calculateShapeArea = (inShape: Circle | Rectangle): number => {
    if (inShape.shape === 'circle') {
      return Math.PI * Math.pow(inShape.radius, 2);
    } else if (inShape.shape === 'rectangle') {
      return inShape.length * inShape.width;
    } else {
      throw new Error('Invalid shape');
    }
  };
  // const rectangleArea = calculateShapeArea({
  //   shape: 'rectangle',
  //   width: 4,
  //   length: 6,
  // });
  // console.log(rectangleArea);

  //
}
