import {
  Injectable
} from '@angular/core';

import {
  BBAuthGetTokenArgs
} from '@blackbaud/auth-client';

@Injectable()
export class SkyPactAuthTokenProvider {
  public getToken(args?: BBAuthGetTokenArgs): Promise<string> {
    return Promise.resolve('mock_access_token_auth-client@blackbaud.com');
  }

  public getContextToken(args?: BBAuthGetTokenArgs): Promise<string> {
    return this.getToken(args);
  }
}
