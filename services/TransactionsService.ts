/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transaction } from '../models/transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List all Transactions
   * List all transactions.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getTransactions(
limit?: number,
startingAfter?: string,
endingBefore?: string,
): CancelablePromise<{
has_more?: boolean;
data?: Array<transaction>;
}> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/transactions',
      query: {
        'limit': limit,
        'starting_after': startingAfter,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Retrieve a Transaction
   * Get a transaction by its id.
   * @param transactionId Id of the transaction
   * @returns transaction OK
   * @throws ApiError
   */
  public getTransaction(
transactionId: string,
): CancelablePromise<transaction> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/transactions/{transaction_id}',
      path: {
        'transaction_id': transactionId,
      },
    });
  }

}
