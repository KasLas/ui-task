export type Icon = {
  id: string;
  resolutions: number[][];
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

export type DevicesSlice = {
  devices: Device[];
  isLoading: boolean;
  error: string;
};

export type FilterOptions = {
  value: string;
  name: string;
};

export type QueryDeviceData = {
  devices: Device[];
  version: string;
};
