/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payout_link } from '../models/payout_link';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PayoutLinks {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * List all Payout Links
   * List all created Payout Links.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getPayoutLinks(
    limit?: number,
    startingAfter?: string,
    endingBefore?: string,
  ): CancelablePromise<{
    has_more?: boolean;
    data?: Array<payout_link>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/payout-links',
      query: {
        'limit': limit,
        'starting_after': startingAfter,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Create a Payout Link
   * Create a Payout Link.
   * @param requestBody 
   * @returns payout_link OK
   * @throws ApiError
   */
  public createPayoutLink(
    requestBody?: {
      /**
       * The user's id.
       */
      user_id?: string | null;
      /**
       * The payee. This is optional.
       */
      payee?: any | null;
      amount: number;
      delivery?: any | null;
      /**
       * Force the collection of 1099 or W-8 information. Defaults to `false`.
       */
      force_collect_compliance_information?: boolean;
      metadata?: string | any | null;
      /**
       * Add a memo to the top of the Payout Link
       */
      memo?: string;
    },
  ): CancelablePromise<payout_link> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/payout-links',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieve a Payout Link
   * Get a payout link by its id.
   * @param payoutLinkId Id of the payout link
   * @returns payout_link OK
   * @throws ApiError
   */
  public getPayoutLink(
    payoutLinkId: string,
  ): CancelablePromise<payout_link> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/payout-links/{payout_link_id}',
      path: {
        'payout_link_id': payoutLinkId,
      },
    });
  }

  /**
   * Delete a Payout Link
   * Cancel a payout link
   * @param payoutLinkId Id of the payout link
   * @returns payout_link OK
   * @throws ApiError
   */
  public deletePayoutLink(
    payoutLinkId: string,
  ): CancelablePromise<payout_link> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v2/payout-links/{payout_link_id}',
      path: {
        'payout_link_id': payoutLinkId,
      },
    });
  }

}
