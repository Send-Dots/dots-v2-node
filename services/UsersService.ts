/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_method } from '../models/payment_method';
import type { user } from '../models/user';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List all Users
   * List all users connected to your application.
   * @param startingAfter A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list.
   * @param limit A limit on the number of objects to be returned, between 1 and 100.
   * @param endingBefore A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list.
   * @returns any OK
   * @throws ApiError
   */
  public getUsers(
startingAfter?: string,
limit?: number,
endingBefore?: string,
): CancelablePromise<{
data?: Array<user>;
has_more?: boolean;
}> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/users',
      query: {
        'starting_after': startingAfter,
        'limit': limit,
        'ending_before': endingBefore,
      },
    });
  }

  /**
   * Create a User
   * Create a user.
   * @param requestBody 
   * @returns user OK
   * @throws ApiError
   */
  public createUser(
requestBody?: {
/**
 * The user's first name.
 */
first_name: string;
/**
 * The user's last name.
 */
last_name: string;
/**
 * The user's email address.
 */
email: string;
/**
 * The user's phone number country code. e.g. "1"
 */
country_code: string;
/**
 * The user's phone number. e.g. "4157223331"
 */
phone_number: string;
/**
 * Username to assign the user.
 */
username?: string;
/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata?: string | any;
},
): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/users',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieve a User
   * Get a user by their id.
   * @param userId Id of the user to fetch
   * @returns user OK
   * @throws ApiError
   */
  public getUser(
userId: string,
): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/users/{user_id}',
      path: {
        'user_id': userId,
      },
    });
  }

  /**
   * Delete a User
   * Delete a user.
   * @param userId Id of the user to fetch
   * @returns user OK
   * @throws ApiError
   */
  public deleteUser(
userId: string,
): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/v2/users/{user_id}',
      path: {
        'user_id': userId,
      },
    });
  }

  /**
   * Submit Compliance Information
   * Add Compliance information to a user.
   * @param userId Id of the user to fetch
   * @param requestBody 
   * @returns any OK
   * @throws ApiError
   */
  public submitCompliance(
userId: string,
requestBody?: {
w9?: {
entity_type: 'individual' | 'business';
/**
 * Legal bussiness name. Required if `entity_type` is business.
 */
business_name?: string;
/**
 * Required if `entity_type` is individual.
 */
date_of_birth: string;
/**
 * SSN if `entity_type` is `individual`. EIN if `entity_type` is `business`.
 */
tin: string;
address: {
line_1: string;
line_2?: string;
city: string;
state: string;
country: string;
postcode: string;
};
};
w8ben?: {
/**
 * Full name of the person.
 */
name: string;
/**
 * The two-letter ISO country code associated with the beneficial owner's citizenship.
 */
citizenship_country: string;
date_of_birth: string;
/**
 * SSN
 */
tin: string;
/**
 * The tax identification number associated with the beneficial owner's country of residence.
 */
foreign_tax_id?: string;
/**
 * The two-letter ISO country code of the country for tax treaty purposes.
 */
tax_treaty_country?: string;
/**
 * The article and paragraph of the citation claimed for tax treaty purposes.
 */
tax_treaty_citation?: string;
/**
 * The withholding rate claimed for tax treaty purposes. For example, a 15% rate would be represented as 0.15.
 */
tax_treaty_rate?: number;
/**
 * The type of income for tax treaty purposes. Valid values are - interest1 (Interest Paid by U.S. Obligors) - dividend6 (Dividends Paid by U.S. Corporations) - dividend7 (Dividends Qualifying for Direct Dividend Rate) - pension15 (Pensions and Annuities) - socialSecurity (Social Security) - equipment10 (Industrial Equipment) - knowhow10 (Know-How/Other Industrial Royalties) - patent10 (Patents) - film11 (Film & TV) - copyright12 (Copyrights)
 */
tax_treaty_income_type?: 'interest1' | 'dividend6' | 'dividend7' | 'pension15' | 'socialSecurity' | 'equipment10' | 'knowhow10' | 'patent10' | 'film11' | 'copyright12';
/**
 * An optional explanation for the tax treaty claimed.
 */
tax_treaty_explanation?: string;
address: {
line_1: string;
line_2?: string;
city: string;
state: string;
country: string;
postcode: string;
};
signature: {
/**
 * The consent of the beneficial owner to the disclosure of their information to the IRS.
 */
consent: boolean;
/**
 * The name of the person signing the form.
 */
name: string;
/**
 * The email address of the person signing the form.
 */
email: string;
};
};
},
): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/users/{user_id}/compliance',
      path: {
        'user_id': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Send a Verification Token
   * Send a user a verification token.
   * @param userId Id of the user to fetch
   * @returns any Accepted
   * @throws ApiError
   */
  public sendVerificationToken(
userId: string,
): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/users/{user_id}/send-verification-token',
      path: {
        'user_id': userId,
      },
    });
  }

  /**
   * Verify a User
   * Verify a user with a token.
   * @param userId Id of the user to fetch
   * @param requestBody 
   * @returns any OK
   * @throws ApiError
   */
  public verify(
userId: string,
requestBody?: {
/**
 * The token sent to the user.
 */
token: string;
},
): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/users/{user_id}/verify',
      path: {
        'user_id': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Incorrect token`,
      },
    });
  }

  /**
   * Retrieve a Payout Method
   * Get a user's connected payout methods.
   * @param userId Id of the user to fetch
   * @returns payment_method OK
   * @throws ApiError
   */
  public getPayoutMethods(
userId: string,
): CancelablePromise<Array<payment_method>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/users/{user_id}/payout-methods',
      path: {
        'user_id': userId,
      },
    });
  }

  /**
   * Add a Payout Method
   * Add a payout method to the user. Payout method can be one of `paypal`, `venmo`, `ach`, or `cash_app`. Each method has different required parameters.
   * @param userId Id of the user to fetch
   * @param requestBody 
   * @returns payment_method OK
   * @throws ApiError
   */
  public addPayoutMethod(
userId: string,
requestBody?: {
/**
 * Payout platform to add.
 */
platform: 'paypal' | 'venmo' | 'cash_app' | 'ach';
/**
 * Bank account or Cash App routing number. Required if `platform` = `ach` or `cash_app`.
 */
routing_number?: string;
/**
 * Bank account or Cash App account number. Required if `platform` = `ach` or `cash_app`.
 */
account_number?: string;
/**
 * Bank account type. Required if `platform` = `ach`.
 */
account_type?: 'checking' | 'savings';
/**
 * PayPal email address. Required if `platform` = `paypal`.
 */
email?: string;
/**
 * Venmo phone number. Required if `platform` = `venmo`.
 */
phone_number?: string;
/**
 * Cash App Cash Tag. Required if `platform` = `cash_app`.
 */
cash_tag?: string;
},
): CancelablePromise<payment_method> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/users/{user_id}/payout-methods',
      path: {
        'user_id': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
