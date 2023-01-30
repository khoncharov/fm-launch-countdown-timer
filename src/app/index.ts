import { LS_TARGET_TIME_NAME, TimeShift } from './const';
import { getTargetTimestamp } from './utils';
import Clock from './components/clock';
import PageView from './components/page-view';

class PageService extends PageView {
  private clock: Clock;

  constructor() {
    super();

    this.clock = new Clock(this.targetTimestamp);
  }

  init(): void {
    this.clock.start();

    this.btnSettingsApply.addEventListener('click', () => {
      const timeShift: TimeShift = {
        days: Number(this.inputDay.value),
        hours: Number(this.inputHour.value),
        minutes: Number(this.inputMinute.value),
        seconds: Number(this.inputSecond.value),
      };

      this.targetTimestamp = getTargetTimestamp(timeShift);
      localStorage.setItem(LS_TARGET_TIME_NAME, this.targetTimestamp.toString());

      this.settings.close();

      this.clock.stop();
      this.clock = new Clock(this.targetTimestamp);
      this.clock.start();
    });
  }
}

const pageService = new PageService();
export default pageService;
