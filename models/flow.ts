/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type flow = {
  id?: string;
  created?: string;
  user_id?: string | null;
  steps?: Array<'compliance' | 'manage-payments' | 'manage-payouts' | 'payout'>;
  completed_steps?: Array<'compliance' | 'manage-payments' | 'manage-payouts' | 'payout'>;
  link?: string;
  metadata?: string | any | null;
};
