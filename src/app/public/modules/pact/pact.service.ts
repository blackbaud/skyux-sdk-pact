import {
  SkyAppConfig
} from '@skyux/config';

import {
  Matchers,
  PactWeb
} from '@pact-foundation/pact-web';

/**
 * Wrapper service for pact-js functions to handle finding the correct pact server
 */
export class SkyPactService {

  private pactProviders: { [providerName: string]: PactWeb } = {};

  private matchersInternal: any;

  constructor(private appConfig: SkyAppConfig) {
    Object.keys(this.appConfig.runtime.pactConfig.providers).forEach((providerName: string) => {
      const pactProvider = this.appConfig.runtime.pactConfig.providers[providerName];
      const pact = new PactWeb(pactProvider.pactOptions);
      this.pactProviders[providerName] = pact;
    });

    this.matchersInternal = Matchers;
  }

  /**
   * Add an interaction to the Mock Service.
   * @param provider The name of the provider service.
   * @param interaction The provider interaction.
   */
  public addInteraction(provider: string, interaction: any): Promise<string> {
    return this.pactProviders[provider].addInteraction(interaction);
  }

  /**
   * Clear up any interactions in the Mock Service.
   * @param provider The name of the provider service.
   */
  public removeInteractions(provider: string): Promise<string> {
    return this.pactProviders[provider].removeInteractions();
  }

  /**
   * Writes the Pact file and clears any interactions left behind.
   * @param provider The name of the provider service.
   */
  public finalize(provider: string): Promise<string> {
    return this.pactProviders[provider].finalize();
  }

  /**
   * Checks with the Mock Service if the expected interactions have been exercised.
   * @param provider The name of the provider service.
   */
  public verify(provider: string): Promise<string> {
    return this.pactProviders[provider].verify();
  }

  public get matchers(): any {
    return this.matchersInternal;
  }
}
