import { CloneyPage } from './app.po';

describe('cloney App', () => {
  let page: CloneyPage;

  beforeEach(() => {
    page = new CloneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
