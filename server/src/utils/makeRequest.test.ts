import makeRequest from './makeRequest';
import config from '../config';

const API_BASE_URL = config.XERO_BASE_URL;

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

const mockResponse = {
  data: 'mock data'
};

const mockResponseJson = jest.fn().mockResolvedValue(mockResponse);
(global.fetch as jest.Mock).mockResolvedValue({
  ok: true,
  json: mockResponseJson
});

describe('makeRequest utility', () => {
  test('should make a GET request', async () => {
    const url = '/sample-get';
    const response = await makeRequest.get(url);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}${url}`,
      expect.objectContaining({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
    );
    expect(response).toEqual(mockResponse);
  });

  test('should make a POST request', async () => {
    const url = '/sample-post';
    const data = { key: 'value' };
    const response = await makeRequest.post(url, data);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}${url}`,
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
    );
    expect(response).toEqual(mockResponse);
  });

  test('should make a PUT request', async () => {
    const url = '/sample-put';
    const data = { key: 'value' };
    const response = await makeRequest.put(url, data);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}${url}`,
      expect.objectContaining({
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
    );
    expect(response).toEqual(mockResponse);
  });

  test('should make a DELETE request', async () => {
    const url = '/sample-delete';
    const response = await makeRequest.delete(url);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}${url}`,
      expect.objectContaining({
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
    );
    expect(response).toEqual(mockResponse);
  });

  test('should make a PATCH request', async () => {
    const url = '/sample-patch';
    const data = { key: 'value' };
    const response = await makeRequest.patch(url, data);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}${url}`,
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
    );
    expect(response).toEqual(mockResponse);
  });
});
