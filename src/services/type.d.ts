type DTOSharedRequest = {
  page: number;
  limit: number;
  filter?: string;
};

type DTOSharedResponse = {
  message?: string;
  success: boolean;
};

interface DTOSharedResponseList<L> extends DTOSharedResponse {
  totals: number;
  list: L[];
}

export type { DTOSharedRequest, DTOSharedResponse, DTOSharedResponseList };
