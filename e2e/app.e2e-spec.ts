import { KonamiExamplePage } from './app.po';

describe('konami-example App', () => {
  let page: KonamiExamplePage;

  beforeEach(() => {
    page = new KonamiExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lol works!');
  });
});
