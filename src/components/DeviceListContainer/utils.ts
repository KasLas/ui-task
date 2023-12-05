import { Resolution } from '../../utils/types';

export function getImgDimensions(dimensions: Resolution[], size: number) {
  const result = dimensions.find(([x, y]) => x === size && y === size);

  return { x: result ? result[0] : 0, y: result ? result[1] : 0 };
}
