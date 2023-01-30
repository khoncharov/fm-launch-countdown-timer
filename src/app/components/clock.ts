import { MS_PER_SECOND, CHECK_TIMEOUT } from '../const';
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
    const timeLeft = this.targetTimestamp - new Date().getTime() + MS_PER_SECOND;

    if (timeLeft > 0) {
      this.memo = timestampToMemoString(timeLeft);
      this.board.setInitial(this.memo);

      this.timerId = setTimeout(this.timeoutHandler.bind(this), CHECK_TIMEOUT);
    }
  }

  private timeoutHandler(): void {
    const timeLeft = this.targetTimestamp - new Date().getTime();

    if (timeLeft > 0) {
      const timeChanged = timestampToMemoString(timeLeft) !== this.memo;

      if (timeChanged) {
        this.memo = timestampToMemoString(timeLeft);
        this.board.showNext(this.memo);
      }

      this.timerId = setTimeout(this.timeoutHandler.bind(this), CHECK_TIMEOUT);
    }
  }

  stop(): void {
    clearTimeout(this.timerId);
  }
}
