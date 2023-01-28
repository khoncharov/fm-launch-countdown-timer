import { MS_PER_SECOND, TIME_CHECK_TIMEOUT } from '../const';
import { getTargetTime, timeStampConverter } from './time-utils';

export class Clock {
  targetTime: number;

  isRunning: boolean = false;

  private memo: string = '';

  private timerId: number = 0;

  constructor() {
    this.targetTime = Number(localStorage.getItem('target-time')) || getTargetTime();
  }

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;

      const initDiff = this.targetTime - new Date().getTime() + MS_PER_SECOND;
      // invoke board animation
      console.log(timeStampConverter(initDiff).join('-'));

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }

  stop(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.isRunning = false;
    }
  }

  private timeoutHandler(): void {
    const diff = this.targetTime - new Date().getTime();

    console.log(diff);

    if (diff > 0) {
      const timeChanged = timeStampConverter(diff).join('-') !== this.memo;

      if (timeChanged) {
        this.memo = timeStampConverter(diff).join('-');
        // invoke board animation
        console.log(this.memo);
      }

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }
}

export const clockService = new Clock();
