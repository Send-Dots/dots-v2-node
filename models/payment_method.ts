/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type payment_method = {
  id?: string;
  platform: 'ach' | 'paypal' | 'venmo' | 'cash_app' | 'intl_transfer';
  description?: string;
  mask?: string;
  email?: string;
  phone_number?: string;
  cash_tag?: string;
  country?: string;
  currency?: string;
};
