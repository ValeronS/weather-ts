export type Forecast = {
  city: object;
  cnt: number;
  cod: string;
  list: object[];
  message: number;
};

export type MessageResponse = {
  message: string;
};

export type ErrorsResponse = {
  message: string;
  errors: Record<string, string[]>;
};
