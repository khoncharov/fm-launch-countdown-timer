import {
  INIT_SETTINGS_VALUE,
  LS_TARGET_TIME_NAME,
  MAX_DAYS,
  MAX_HOURS,
  MAX_MINUTES,
  MAX_SECONDS,
  SETTINGS_UPDATE_TIMEOUT,
  TimeShift,
} from '../const';
import { getTargetTimestamp, restrictInput } from '../utils';

export default class PageView {
  protected settings = document.querySelector('#settings-dialog') as HTMLDialogElement;

  protected btnOpenSettings = document.querySelector(
    '#settings-btn-open',
  ) as HTMLButtonElement;

  protected btnSettingsApply = document.querySelector(
    '#settings-btn-apply',
  ) as HTMLDialogElement;

  protected btnSettingsCancel = document.querySelector(
    '#settings-btn-cancel',
  ) as HTMLButtonElement;

  protected inputDay = document.querySelector('#settings-day') as HTMLInputElement;

  protected inputHour = document.querySelector('#settings-hour') as HTMLInputElement;

  protected inputMinute = document.querySelector('#settings-minute') as HTMLInputElement;

  protected inputSecond = document.querySelector('#settings-second') as HTMLInputElement;

  protected result = document.querySelector(
    '#settings-date-time',
  ) as HTMLParagraphElement;

  protected targetTimestamp: number;

  private settingsUpdateTimerId: number | undefined = undefined;

  constructor() {
    const savedTargetTime = localStorage.getItem(LS_TARGET_TIME_NAME);

    if (savedTargetTime && Number.isInteger(+savedTargetTime)) {
      this.targetTimestamp = Number(savedTargetTime);
    } else {
      this.targetTimestamp = getTargetTimestamp();
      localStorage.setItem(LS_TARGET_TIME_NAME, this.targetTimestamp.toString());
    }

    this.btnOpenSettings.addEventListener('click', () => {
      this.settingsUpdateTimerId = setInterval(() => {
        const timeShift: TimeShift = {
          days: Number(this.inputDay.value),
          hours: Number(this.inputHour.value),
          minutes: Number(this.inputMinute.value),
          seconds: Number(this.inputSecond.value),
        };
        this.result.textContent = new Date(getTargetTimestamp(timeShift)).toString();
      }, SETTINGS_UPDATE_TIMEOUT);

      this.inputDay.value = INIT_SETTINGS_VALUE;
      this.inputHour.value = INIT_SETTINGS_VALUE;
      this.inputMinute.value = INIT_SETTINGS_VALUE;
      this.inputSecond.value = INIT_SETTINGS_VALUE;

      this.settings.showModal();
    });

    this.btnSettingsCancel.addEventListener('click', () => {
      clearInterval(this.settingsUpdateTimerId);
      this.settings.close();
    });

    this.inputDay.addEventListener('input', (e) => {
      restrictInput(e, MAX_DAYS);
    });

    this.inputHour.addEventListener('input', (e) => {
      restrictInput(e, MAX_HOURS);
    });

    this.inputMinute.addEventListener('input', (e) => {
      restrictInput(e, MAX_MINUTES);
    });

    this.inputSecond.addEventListener('input', (e) => {
      restrictInput(e, MAX_SECONDS);
    });
  }
}
