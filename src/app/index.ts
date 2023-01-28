import { clockService } from './viewComponents/clock';

class PageService {
  private clock = clockService;

  constructor() {}

  init(): void {
    this.clock.start();

    const setupDialog = document.querySelector('#settings-dialog') as HTMLDialogElement;
    const setupBtn = document.querySelector('#open-settings-btn') as HTMLButtonElement;
    setupBtn.addEventListener('click', () => {
      // setupDialog.showModal();

      if (this.clock.isRunning) {
        this.clock.stop();
      } else {
        this.clock.start();
      }
    });
  }
}

const pageService = new PageService();
export default pageService;
