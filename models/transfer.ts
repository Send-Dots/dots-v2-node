/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { transaction } from './transaction';

export type transfer = {
  id?: string;
  created?: string;
  user_id?: string;
  status?: 'created' | 'pending' | 'failed' | 'completed' | 'flagged';
  type?: 'refill' | 'payout' | 'balance';
  amount?: number;
  external_data?: {
account_id?: string;
external_id?: string;
platform?: 'ach' | 'paypal' | 'venmo' | 'visa' | 'amazon' | 'cash_app' | 'intl_bank' | 'intl_transfer' | 'bank_transfer';
};
  transactions?: Array<transaction>;
  metadata?: string | any | null;
};
