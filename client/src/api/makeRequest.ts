import { API_BASE_URL } from '../config';

const createRequest = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const headers = { ...defaultHeaders, ...options.headers };

  const config: RequestInit = {
    // mode: 'no-cors',
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/${url}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      return Promise.reject(errorData);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const makeRequest = {
  get: (url: string, config: RequestInit = {}) =>
    createRequest(url, { ...config, method: 'GET' }),
  post: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    }),
  put: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (url: string, config: RequestInit = {}) =>
    createRequest(url, { ...config, method: 'DELETE' }),
  patch: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

export default makeRequest;
