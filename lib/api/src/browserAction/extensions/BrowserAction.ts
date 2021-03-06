import { Dispatcher } from '@exteranto/core'
import { BrowserActionClickedEvent } from '../events'
import { TabIdUnknownException } from '@internal/tabs/exceptions'
import { BrowserAction as AbstractBrowserAction } from '../BrowserAction'

export class BrowserAction extends AbstractBrowserAction {

  /**
   * {@inheritdoc}
   */
  public async getBadgeText (tabId: number) : Promise<string> {
    return browser.browserAction.getBadgeText({ tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public async setBadgeText (text: string, tabId: number) : Promise<void> {
    return (browser as any).browserAction.setBadgeText({ text, tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public async getBadgeColor (tabId: number) : Promise<number[]> {
    return browser.browserAction.getBadgeBackgroundColor({ tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public async setBadgeColor (color: number[], tabId: number) : Promise<any> {
    return (browser as any).browserAction.setBadgeBackgroundColor({ color, tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public async getTitle (tabId: number) : Promise<string> {
    return browser.browserAction.getTitle({ tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public async setTitle (title: string, tabId: number) : Promise<void> {
    try {
      browser.browserAction.setTitle({ title, tabId })
    } catch {
      return Promise.reject(new TabIdUnknownException())
    }
  }

  /**
   * {@inheritdoc}
   */
  public async setIcon (path: string | object, tabId: number) : Promise<void> {
    return browser.browserAction.setIcon({ path, tabId })
      .catch(() => Promise.reject(new TabIdUnknownException()))
  }

  /**
   * {@inheritdoc}
   */
  public registerEvents (dispatcher: Dispatcher) : void {
    browser.browserAction.onClicked.addListener(({ id }) => {
      dispatcher.fire(new BrowserActionClickedEvent(id))
    })
  }

}
