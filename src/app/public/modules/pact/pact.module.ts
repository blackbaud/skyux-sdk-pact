import {
  NgModule
} from '@angular/core';

import {
  SkyAppConfig
} from '@skyux/config';

import {
  SkyAuthTokenProvider
} from '@skyux/http';

import {
  SkyPactService
} from './pact.service';

import {
  SkyPactAuthTokenProvider
} from './pact-auth-token-provider';

@NgModule({
  providers: [
    {
      provide: SkyPactService,
      useClass: SkyPactService,
      deps: [SkyAppConfig]
    },
    {
      provide: SkyAuthTokenProvider,
      useClass: SkyPactAuthTokenProvider
    }
  ]
})
export class SkyPactModule { }
