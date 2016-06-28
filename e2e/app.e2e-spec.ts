import { ZonesObservables2Page } from './app.po';

describe('zones-observables-2 App', function() {
  let page: ZonesObservables2Page;

  beforeEach(() => {
    page = new ZonesObservables2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
