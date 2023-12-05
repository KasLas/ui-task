export type Resolution = [number, number];

export type Icon = {
  id: string;
  resolutions: Resolution[];
};

export type Line = {
  id: string;
  name: string;
};

export type Product = {
  abbrev: string;
  name: string;
};

export type Uisp = {
  bleServices: Record<string, unknown>;
  firmware: {
    board: string[];
    platform: undefined;
  };
  line: string;
  nameLegacy: string[];
};

export type Device = {
  guids: string[];
  icon: Icon;
  id: string;
  line: Line;
  product: Product;
  shortnames: string[];
  sysids: string[];
  triplets: string[];
  uisp: Uisp;
};

export type FilterOptions = {
  value: string;
  name: string;
};

export type QueryDeviceData = {
  devices: Device[];
  version: string;
};

export type ListItem = {
  id: string;
  img: string;
  productLine: string;
  name: string;
};
