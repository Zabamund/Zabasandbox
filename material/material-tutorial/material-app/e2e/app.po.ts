import { browser, by, element } from 'protractor';

export class MaterialAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('matap-root h1')).getText();
  }
}
