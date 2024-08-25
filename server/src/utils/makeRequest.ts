import config from '../config';

const XERO_BASE_URL = config.XERO_BASE_URL;

async function createRequest(
  url: string,
  options: RequestInit = {}
): Promise<any> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  const headers = { ...defaultHeaders, ...options.headers };

  const config: RequestInit = {
    ...options,
    headers
  };

  try {
    const response = await fetch(`${XERO_BASE_URL}${url}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      return Promise.reject(errorData);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

const makeRequest = {
  get: (url: string, config: RequestInit = {}) =>
    createRequest(url, { ...config, method: 'GET' }),
  post: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data)
    }),
  put: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  delete: (url: string, config: RequestInit = {}) =>
    createRequest(url, { ...config, method: 'DELETE' }),
  patch: (url: string, data: any, config: RequestInit = {}) =>
    createRequest(url, {
      ...config,
      method: 'PATCH',
      body: JSON.stringify(data)
    })
};

export default makeRequest;
