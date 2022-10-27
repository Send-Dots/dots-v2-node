/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { FlowsService } from './services/FlowsService';
import { PayoutLinksService } from './services/PayoutLinksService';
import { PayoutRequestsService } from './services/PayoutRequestsService';
import { PayoutsService } from './services/PayoutsService';
import { TransactionsService } from './services/TransactionsService';
import { TransfersService } from './services/TransfersService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Dots {

  public readonly flows: FlowsService;
  public readonly payoutLinks: PayoutLinksService;
  public readonly payoutRequests: PayoutRequestsService;
  public readonly payouts: PayoutsService;
  public readonly transactions: TransactionsService;
  public readonly transfers: TransfersService;
  public readonly users: UsersService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
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

    this.flows = new FlowsService(this.request);
    this.payoutLinks = new PayoutLinksService(this.request);
    this.payoutRequests = new PayoutRequestsService(this.request);
    this.payouts = new PayoutsService(this.request);
    this.transactions = new TransactionsService(this.request);
    this.transfers = new TransfersService(this.request);
    this.users = new UsersService(this.request);
  }
}
