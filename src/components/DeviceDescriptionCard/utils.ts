import { Description, Device, RenderDescriptionData } from '../../utils/types';
import get from 'lodash/get';
import reduce from 'lodash/reduce';

enum OBJ_PATH {
  LINE_NAME = 'line.name',
  LINE_ID = 'line.id',
  PRODUCT_NAME = 'product.name',
  PRODUCT_ABBREV = 'product.abbrev',
  NA_MAX_POWER = 'unifi.network.radios.na.maxPower',
  NG_MAX_POWER = 'unifi.network.radios.ng.maxPower',
  NG_MAX_SPEED = 'unifi.network.radios.ng.maxSpeedMegabitsPerSecond',
  NA_MAX_SPEED = 'unifi.network.radios.na.maxSpeedMegabitsPerSecond',
  NUMBER_OF_PORTS = 'unifi.network.numberOfPorts',
}

export const neededDescription = [
  { path: OBJ_PATH.LINE_NAME, displayText: 'Product Line' },
  { path: OBJ_PATH.LINE_ID, displayText: 'ID' },
  { path: OBJ_PATH.PRODUCT_NAME, displayText: 'Name' },
  { path: OBJ_PATH.PRODUCT_ABBREV, displayText: 'Short Nme' },
  { path: OBJ_PATH.NA_MAX_POWER, displayText: 'Max.power NA' },
  { path: OBJ_PATH.NG_MAX_POWER, displayText: 'Max.power NG' },
  {
    path: OBJ_PATH.NG_MAX_SPEED,
    displayText: 'NG Speed',
  },
  {
    path: OBJ_PATH.NA_MAX_SPEED,
    displayText: 'NA Speed',
  },
  { path: OBJ_PATH.NUMBER_OF_PORTS, displayText: 'Number of ports' },
];

export function getDeviceDescription(
  device: Device,
  description: Description[]
) {
  const extractedValues = reduce(
    description,
    (result, key) => {
      const value = get(device, key.path);
      if (value !== undefined) {
        let displayText: string = '';
        //  Append the display text with necessary unit
        if (
          key.path === OBJ_PATH.NG_MAX_POWER ||
          key.path === OBJ_PATH.NA_MAX_POWER
        ) {
          displayText = `${value}W`;
        } else if (
          key.path === OBJ_PATH.NA_MAX_SPEED ||
          key.path === OBJ_PATH.NG_MAX_SPEED
        ) {
          displayText = `${value} Mbps`;
        } else {
          displayText = value;
        }

        result.push({
          title: key.displayText,
          value: displayText,
        });
      }
      return result;
    },
    [] as RenderDescriptionData[]
  );
  return extractedValues;
}
