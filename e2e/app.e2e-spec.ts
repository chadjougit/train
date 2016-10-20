import { TrainPage } from './app.po';

describe('train App', function() {
  let page: TrainPage;

  beforeEach(() => {
    page = new TrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
