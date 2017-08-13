import { browser, by, element } from 'protractor';

export class BugAttemptPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bug-root h1')).getText();
  }
}
