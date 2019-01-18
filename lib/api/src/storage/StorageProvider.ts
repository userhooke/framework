import { Browser, Provider, Script } from '@exteranto/core'

import { Storage } from './Storage'
import { Storage as ChromeStorage } from './chrome/Storage'
import { Storage as ExtensionsStorage } from './extensions/Storage'
import { Storage as SafariStorage } from './safari/Storage'

export class StorageProvider extends Provider {

  /**
   * The scripts that this provider should be registered for.
   *
   * @return {Script[]}
   */
  public only () : Script[] {
    return [Script.BACKGROUND]
  }

  /**
   * Boot the provider services.
   */
  public boot () : void {
    this.container.bind(ChromeStorage).to(Storage).for(Browser.CHROME)
    this.container.bind(ExtensionsStorage).to(Storage).for(Browser.EXTENSIONS)
    this.container.bind(SafariStorage).to(Storage).for(Browser.SAFARI)
  }

  /**
   * Register the provider services.
   */
  public register () : void {
    //
  }
}
