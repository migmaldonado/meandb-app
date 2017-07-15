import { MeandbAppPage } from './app.po';

describe('meandb-app App', function() {
  let page: MeandbAppPage;

  beforeEach(() => {
    page = new MeandbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
