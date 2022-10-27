/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transfer } from '../models/transfer';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Transfers {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * List all Transfers
   * Lsit all transfers.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getTransfers(
    limit?: number,
    startingAfter?: string,
    endingBefore?: string,
  ): CancelablePromise<{
    has_more?: boolean;
    data?: Array<transfer>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/transfers',
      query: {
        'limit': limit,
        'starting_after': startingAfter,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Create a Transfer
   * Create a transfer.
   * @param requestBody 
   * @returns transfer OK
   * @throws ApiError
   */
  public createTransfer(
    requestBody?: {
      /**
       * The amount in cents to transfer. Negative amount transfers money from the `app` to the `user`.
       */
      amount: number;
      /**
       * The user's id.
       */
      user_id: string;
      /**
       * Transfers marked as `tax_exempt` will not be counted towards the 1099 threshold.
       */
      tax_exempt?: boolean | null;
      idempotency_key?: string | null;
      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: string | any | null;
    },
  ): CancelablePromise<transfer> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/transfers',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get a Transfer
   * Get a transfer by its id.
   * @param transferId Id of the transfer to fetch
   * @returns transfer OK
   * @throws ApiError
   */
  public getTransfer(
    transferId: string,
  ): CancelablePromise<transfer> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/transfers/{transfer_id}',
      path: {
        'transfer_id': transferId,
      },
    });
  }

}
