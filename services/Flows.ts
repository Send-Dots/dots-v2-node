/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { flow } from '../models/flow';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Flows {

  constructor(public readonly httpRequest: BaseHttpRequest) { }

  /**
   * List all Flows
   * List all Flows.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getFlows(
    limit?: number,
    startingAfter?: string,
    endingBefore?: string,
  ): CancelablePromise<{
    has_more?: boolean;
    data?: Array<flow>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/flows',
      query: {
        'limit': limit,
        'starting_after': startingAfter,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Create a Flow
   * Create a new Flow.
   * @param requestBody 
   * @returns flow OK
   * @throws ApiError
   */
  public createFlow(
    requestBody?: {
      /**
       * A list of steps.
       */
      steps: Array<'compliance' | 'manage-payouts' | 'manage-payments' | 'payout'>;
      /**
       * The user's id.
       */
      user_id?: string | null;
      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: string | any | null;
    },
  ): CancelablePromise<flow> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/flows',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieve a Flow
   * Get a Flow by its id.
   * @param flowId Id of the flow to fetch
   * @returns flow OK
   * @throws ApiError
   */
  public getFlow(
    flowId: string,
  ): CancelablePromise<flow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/flows/{flow_id}',
      path: {
        'flow_id': flowId,
      },
    });
  }

}
