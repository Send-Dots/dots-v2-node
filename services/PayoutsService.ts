/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transfer } from '../models/transfer';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PayoutsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a Payout
   * Create a payout for an existing user that has a payout method saved to their account.
   * @param requestBody 
   * @returns transfer Created
   * @throws ApiError
   */
  public createPayout(
requestBody?: {
user_id: string;
amount: number;
platform: 'paypal' | 'venmo' | 'ach' | 'bank_transfer' | 'cash_app' | 'default';
/**
 * Required for `ach` and `intl_bank`
 */
account_id?: string;
fund?: boolean;
metadata?: string | any;
},
): CancelablePromise<transfer> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/payouts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Send a Payout
   * Send a payout to a person when you know their phone number or user id. If the user has a Dots acconut, the funds will delivered according to their saved prefernces. Otherwise, they will be sent a Payout Link to onboard and recieve funds.
   * @param requestBody 
   * @returns any Created
   * @throws ApiError
   */
  public sendPayout(
requestBody?: {
/**
 * The amount in cents to pay the user.
 */
amount: number;
/**
 * The user's id. `user_id` or `payee` is required.
 */
user_id?: string;
/**
 * The payee's phone number. `user_id` or `payee` is required.
 */
payee?: {
country_code: string;
phone_number: string;
};
delivery?: {
/**
 * Message to send with the payout through sms.
 */
message?: string;
};
/**
 * Collect 1099 or w8-ben information.
 */
force_collect_compliance_information?: boolean;
/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata?: string | any;
/**
 * Add a memo to the top of the Payout Link
 */
memo?: string;
},
): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/payouts/send-payout',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
