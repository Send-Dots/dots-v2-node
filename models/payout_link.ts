/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type payout_link = {
  id?: string;
  created?: string;
  link?: string;
  amount?: number;
  status?: 'claimed' | 'delivery_pending' | 'delivery_failed' | 'delivered' | 'canceled';
  payee?: {
first_name?: string;
last_name?: string;
email?: string;
country_code?: string;
phone_number?: string;
};
  delivery?: {
method?: 'link' | 'sms' | 'email';
email?: string;
country_code?: string;
phone_number?: string;
};
  tax_exempt?: boolean;
  claimed_user_id?: string;
  metadata?: string | any | null;
};
