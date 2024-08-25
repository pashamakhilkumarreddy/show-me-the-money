import makeRequest from '../makeRequest';

export /**
eeeeeee *
eeeeeee
eeeeeee
eeeeeee
eeeeeee
eeeeeee */
const FetchBalanceSheet = async () => {
  try {
    /**
     *
     */
    const response = await makeRequest.get('reports/balance-sheet');

    if (response.data) {
      return response.data;
    }
  } catch (err: any) {
    throw err;
  }
};
