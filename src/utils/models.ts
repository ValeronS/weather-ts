export type Coordinates = {
  _coordinates: string[];
};
export type Geometry = {
  geometry: Coordinates;
};

export type GeoObjects = {
  get: (arg0: number) => Geometry;
};

export type SuggestionResponse = {
  geoObjects: GeoObjects;
};

export type Value = {
  value: string;
};

export type SuggestionEvent = {
  get: (arg0: string) => Value;
};
