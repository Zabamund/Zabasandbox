import { MaterialAppPage } from './app.po';

describe('material-app App', () => {
  let page: MaterialAppPage;

  beforeEach(() => {
    page = new MaterialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to matap!');
  });
});
