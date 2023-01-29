import { MS_PER_SECOND, TIME_CHECK_TIMEOUT } from '../const';
import { timestampToMemoString } from '../utils';
import Board from './board';

export default class Clock {
  private board = new Board();

  private memo: string = '';

  private timerId: number = 0;

  private targetTimestamp: number;

  constructor(targetTimestamp: number) {
    this.targetTimestamp = targetTimestamp;
  }

  start(): void {
    const diff = this.targetTimestamp - new Date().getTime();

    if (diff > 0) {
      this.memo = timestampToMemoString(diff);
      this.board.setInitial(this.memo);

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }

  private timeoutHandler(): void {
    const diff = this.targetTimestamp - new Date().getTime();

    if (diff > 0) {
      const timeChanged = timestampToMemoString(diff) !== this.memo;

      if (timeChanged) {
        this.memo = timestampToMemoString(diff);
        this.board.showNext(this.memo);
      }

      this.timerId = setTimeout(this.timeoutHandler.bind(this), TIME_CHECK_TIMEOUT);
    }
  }

  stop(): void {
    clearTimeout(this.timerId);
  }
}
