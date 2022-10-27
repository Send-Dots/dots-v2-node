/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { wallet } from './wallet';

export type user = {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: {
country_code?: string;
phone_number?: string;
};
  wallet?: wallet;
  compliance?: {
tax_id_collected?: boolean;
address_collected?: boolean;
date_of_birth_collected?: boolean;
'1099_collected'?: boolean;
w8_ben_collected?: boolean;
flagged?: boolean;
};
  metadata?: string | any | null;
};
