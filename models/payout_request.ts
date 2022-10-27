/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { payout_link } from './payout_link';
import type { user } from './user';

export type payout_request = {
  id?: string;
  created?: string;
  amount?: number;
  status?: 'created' | 'approved' | 'rejected';
  payee?: {
country_code?: string;
phone_number?: string;
};
  'payout-link'?: payout_link;
  user?: user;
  metadata?: string | any | null;
  memo?: string;
};
