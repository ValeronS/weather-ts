function mapSearchParams(q: Record<string, unknown>) {
  const query = q;
  const params = new URLSearchParams();
  for (const queryKey in query) {
    if (Object.prototype.hasOwnProperty.call(query, queryKey)) {
      if (Array.isArray(query[queryKey])) {
        const array = query[queryKey] as [];
        array.forEach((a) => {
          params.append(`${queryKey}[]`, a);
        });
      } else if (!!query[queryKey] || query[queryKey] === 0) {
        params.append(queryKey, query[queryKey] as string);
      }
    }
  }
  return params;
}

class RefreshError extends Error {
  private _code: 403 | undefined;
  private _msg: 'This fucking refresh token has been used' | undefined;
  constructor() {
    super();
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, RefreshError.prototype);
  }

  get code(): number | void {
    if (this._code) return this._code;
  }

  get msg(): string | void {
    if (this._msg) return this._msg;
  }
}

export const getHeaderAuth = (auth_token?: string | null) => {
  return { Authorization: `Bearer ${auth_token ?? ''}` };
};

export enum Status {
  Ok = 200,
  Unauth = 401,
  PermissionDenied = 403,
  NotFound = 404,
  ServerError = 500,
}

export { mapSearchParams, RefreshError };
