import { BugAttemptPage } from './app.po';

describe('bug-attempt App', () => {
  let page: BugAttemptPage;

  beforeEach(() => {
    page = new BugAttemptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bug!');
  });
});
