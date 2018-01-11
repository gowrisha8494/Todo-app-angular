import { BasicAppPage } from './app.po';

describe('basic-app App', () => {
  let page: BasicAppPage;

  beforeEach(() => {
    page = new BasicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
