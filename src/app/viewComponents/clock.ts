import { MS_PER_SECOND, TIME_CHECK_TIMEOUT } from '../const';
import Board from './board';
import { getTargetTime, timeStampConverter } from './time-utils';

export class Clock {
  public isRunning: boolean = false;

  private board = new Board();

  private targetTime: number;

  private memo: string = '';

  private timerId: number = 0;

  constructor() {
    this.targetTime = Number(localStorage.getItem('target-time')) || getTargetTime();
  }

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;

      const initDiff = this.targetTime - new Date().getTime() + MS_PER_SECOND;

      this.memo = timeStampConverter(initDiff).join('-');
      this.board.setInitial(this.memo);

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }

  stop(): void {
    if (this.isRunning) {
      clearTimeout(this.timerId);
      this.isRunning = false;
    }
  }

  private timeoutHandler(): void {
    const diff = this.targetTime - new Date().getTime();

    if (diff > 0) {
      const timeChanged = timeStampConverter(diff).join('-') !== this.memo;

      if (timeChanged) {
        this.memo = timeStampConverter(diff).join('-');

        this.board.showNext(this.memo);
      }

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }
}

export const clockService = new Clock();
