/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { Flows } from './services/Flows';
import { PayoutLinks } from './services/PayoutLinks';
import { PayoutRequests } from './services/PayoutRequests';
import { Payouts } from './services/Payouts';
import { Transactions } from './services/Transactions';
import { Transfers } from './services/Transfers';
import { Users } from './services/Users';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Dots {

  public readonly flows: Flows;
  public readonly payoutLinks: PayoutLinks;
  public readonly payoutRequests: PayoutRequests;
  public readonly payouts: Payouts;
  public readonly transactions: Transactions;
  public readonly transfers: Transfers;
  public readonly users: Users;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://api.dots.dev/api',
      VERSION: config?.VERSION ?? '1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.flows = new Flows(this.request);
    this.payoutLinks = new PayoutLinks(this.request);
    this.payoutRequests = new PayoutRequests(this.request);
    this.payouts = new Payouts(this.request);
    this.transactions = new Transactions(this.request);
    this.transfers = new Transfers(this.request);
    this.users = new Users(this.request);
  }
}
