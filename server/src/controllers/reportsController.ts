import { Request, Response } from 'express';
import makeRequest from '../utils/makeRequest';

/**
 * Retrieves the balance sheet report from the Xero API.
 *
 * @param {Request} req - The incoming HTTP request.
 * @param {Response} res - The outgoing HTTP response.
 * @return {Promise<void>} A promise that resolves when the response is sent.
 */
export async function getBalanceSheet(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const balanceSheetResponse = await makeRequest.get('/Reports/BalanceSheet');
    res.status(200).send({
      error: false,
      data: balanceSheetResponse
    });
  } catch (error) {
    throw error;
  }
}
