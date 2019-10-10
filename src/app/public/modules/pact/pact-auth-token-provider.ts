import {
  Injectable
} from '@angular/core';

import {
  BBAuthGetTokenArgs
} from '@blackbaud/auth-client';

import {
  SkyAuthToken,
  SkyAuthTokenContextArgs
} from '@skyux/http';

@Injectable()
export class SkyPactAuthTokenProvider {
  public getToken(args?: BBAuthGetTokenArgs): Promise<string> {
    return Promise.resolve('mock_access_token_auth-client@blackbaud.com');
  }

  public getDecodedToken(args?: BBAuthGetTokenArgs): Promise<SkyAuthToken> {
    return this.getToken(args)
      .then((token) => {
        return this.decodeToken(token);
      });
  }

  public getContextToken(args?: BBAuthGetTokenArgs): Promise<string> {
    return this.getToken(args);
  }

  public getDecodedContextToken(args?: SkyAuthTokenContextArgs): Promise<SkyAuthToken> {
    return this.getDecodedToken();
  }

  public decodeToken(token: string): SkyAuthToken {
    return {};
  }
}
