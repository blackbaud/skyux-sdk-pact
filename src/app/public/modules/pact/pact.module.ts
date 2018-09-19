import {
  NgModule
} from '@angular/core';

import {
  SkyPactAuthTokenProvider
} from './pact-auth-token-provider';

import {
  SkyPactService
} from './pact.service';

@NgModule({
  providers: [
    SkyPactAuthTokenProvider,
    SkyPactService
  ]
})
export class SkyPactModule { }
