import { PriceFinderPage } from './app.po';

describe('express-angular App', () => {
  let page: PriceFinderPage;

  beforeEach(() => {
    page = new PriceFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
