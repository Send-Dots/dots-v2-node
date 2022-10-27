/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payout_request } from '../models/payout_request';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PayoutRequests {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * Create a Payout Request
   * Submit a payout request from a person when you know their phone number or user id. Once the payout request is approved, they will be sent a Payout Link to onboard and recieve funds.
   * @param requestBody 
   * @returns payout_request Created
   * @throws ApiError
   */
  public createPayoutsRequest(
    requestBody?: {
      /**
       * The amount in cents to pay the user.
       */
      amount: number;
      /**
       * The user's id. `user_id` or `payee` is required.
       */
      user_id?: string | null;
      /**
       * The payee's phone number. `user_id` or `payee` is required.
       */
      payee?: any | null;
      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: string | any | null;
      /**
       * Add a memo to payout request
       */
      memo?: string;
    },
  ): CancelablePromise<payout_request> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/payout-requests',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * List all Payout Requests
   * List all payout requests.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getPayoutRequests(
    limit?: number,
    startingAfter?: string,
    endingBefore?: string,
  ): CancelablePromise<{
    has_more?: boolean;
    data?: Array<payout_request>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/payout-requests',
      query: {
        'limit': limit,
        'starting_after': startingAfter,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Retrieve a Payout Request
   * Get a payout request by its id.
   * @param payoutRequestId Id of the payout request
   * @returns payout_request OK
   * @throws ApiError
   */
  public getPayoutRequest(
    payoutRequestId: string,
  ): CancelablePromise<payout_request> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/payout-requests/{payout_request_id}',
      path: {
        'payout_request_id': payoutRequestId,
      },
    });
  }

}
