class Api {
  static async getResourceById<Type>(
    resourceUrl: string,
    id: string | number | string[] | undefined
  ): Promise<Type | null> {
    const url = `${resourceUrl}/${id}/`;
    const response = await fetch(url);
    if (response.status !== 200) {
      return null;
    }
    const result: Type = await response.json();
    return result;
  }

  static async getResources<Type>(
    resourceUrl: string,
    searchParams?: URLSearchParams,
    abortSignal?: AbortSignal
  ): Promise<Type | null> {
    const url = `${resourceUrl}/?${searchParams?.toString() ?? ""}`;
    const response = await fetch(url, {
      signal: abortSignal,
    });
    if (response.status !== 200) {
      return null;
    }
    const result: Type = await response.json();
    return result;
  }

  static async createResource<CreateType>(
    resourceUrl: string,
    data: CreateType
  ): Promise<Response> {
    const response = await fetch(`${resourceUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  static async updateResource<UpdateType>(
    resourceUrl: string,
    id: string | number,
    data: UpdateType
  ): Promise<Response> {
    const response = await fetch(`${resourceUrl}/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  static async deleteResource(
    resourceUrl: string,
    id: string | number
  ): Promise<Response> {
    const response = await fetch(`${resourceUrl}/${id}/`, {
      method: "DELETE",
    });
    return response;
  }
}

export { Api };
