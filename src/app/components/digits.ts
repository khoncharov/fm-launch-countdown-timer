export enum DigitName {
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second',
}

export class Digit {
  public prevValue: string = '';

  public cardTop: HTMLDivElement;
  public cardBottom: HTMLDivElement;
  public numTopFix: HTMLDivElement;
  public numTopFlip: HTMLDivElement;
  public numBottomFix: HTMLDivElement;
  public numBottomFlip: HTMLDivElement;

  constructor(name: string) {
    this.cardTop = document.querySelector(`#${name}-top`) as HTMLDivElement;
    this.cardBottom = document.querySelector(`#${name}-bottom`) as HTMLDivElement;
    this.numTopFix = document.querySelector(`#${name}-top-fix`) as HTMLDivElement;
    this.numTopFlip = document.querySelector(`#${name}-top-flip`) as HTMLDivElement;
    this.numBottomFix = document.querySelector(`#${name}-bottom-fix`) as HTMLDivElement;
    this.numBottomFlip = document.querySelector(`#${name}-bottom-flip`) as HTMLDivElement;
  }

  setPrev(value: string): void {
    this.numTopFlip.textContent = value;
    this.numBottomFlip.textContent = value;
    this.prevValue = value;
  }

  setNext(value: string): void {
    this.numTopFix.textContent = value;
    this.numBottomFix.textContent = value;
  }

  isChanged(value: string): boolean {
    return value !== this.prevValue;
  }
}
