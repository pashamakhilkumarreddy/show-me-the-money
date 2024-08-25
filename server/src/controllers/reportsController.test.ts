import request from 'supertest';
import makeRequest from '../utils/makeRequest';
import app from '../index';

describe('getBalanceSheet function', () => {
  it('should return a successful response with the balance sheet data', async () => {
    jest.spyOn(makeRequest, 'get').mockResolvedValue({
      data: 'Balance sheet data'
    });

    const response = await request(app).get('/api/v1/reports/balance-sheet');

    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.data.data).toBe('Balance sheet data');
  });

  it('should return an error response if the makeRequest.get function throws an error', async () => {
    jest.spyOn(makeRequest, 'get').mockRejectedValue({
      message: 'Error fetching balance sheet data'
    });

    const response = await request(app).get('/api/v1/reports/balance-sheet');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toBe('Error fetching balance sheet data');
  });

  it('should return a 404 response if the route is not found', async () => {
    const response = await request(app).get('/invalid-route');

    expect(response.status).toBe(404);
  });
});
