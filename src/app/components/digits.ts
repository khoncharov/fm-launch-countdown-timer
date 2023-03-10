export enum DigitName {
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second',
}

export class Digit {
  private memoValue: string = '';
  private nextValue: string = '';

  private cardTop: HTMLDivElement;
  private cardBottom: HTMLDivElement;
  private cardBottomFix: HTMLDivElement;

  private numTopFix: HTMLDivElement;
  private numTopFlip: HTMLDivElement;
  private numBottomFix: HTMLDivElement;
  private numBottomFlip: HTMLDivElement;

  constructor(name: string) {
    this.cardTop = document.querySelector(`#${name}-top`) as HTMLDivElement;
    this.cardBottom = document.querySelector(`#${name}-bottom`) as HTMLDivElement;
    this.cardBottomFix = document.querySelector(`#${name}-bottom-0`) as HTMLDivElement;

    this.numTopFix = document.querySelector(`#${name}-top-fix`) as HTMLDivElement;
    this.numTopFlip = document.querySelector(`#${name}-top-flip`) as HTMLDivElement;
    this.numBottomFix = document.querySelector(`#${name}-bottom-fix`) as HTMLDivElement;
    this.numBottomFlip = document.querySelector(`#${name}-bottom-flip`) as HTMLDivElement;
  }

  setInit(value: string): void {
    this.memoValue = value;
    this.numTopFlip.textContent = value;
    this.numBottomFlip.textContent = value;
    this.numTopFix.textContent = value;
    this.numBottomFix.textContent = value;
  }

  setNext(value: string): void {
    this.nextValue = value;
  }

  isChanged(): boolean {
    return this.nextValue !== this.memoValue;
  }

  saveNext(): void {
    this.memoValue = this.nextValue;
  }

  redraw(progress: number): void {
    if (progress < 0.5) {
      this.cardTop.style.display = 'block';
      this.cardTop.style.transform = `rotateX(${progress * 2 * -90}deg)`;
      this.cardTop.style.filter = `brightness(${1 - progress})`;
      this.numTopFix.textContent = this.nextValue;
    }

    if (progress >= 0.3) {
      this.cardBottomFix.style.filter = `brightness(${1.3 - progress})`;
    }

    if (progress >= 0.5) {
      this.cardTop.style.display = 'none';
      this.numTopFlip.textContent = this.nextValue;
      this.numBottomFlip.textContent = this.nextValue;
      this.cardBottom.style.display = 'block';
      this.cardBottom.style.transform = `rotateX(${90 - (progress - 0.5) * 2 * 90}deg)`;
      this.cardBottom.style.filter = `brightness(${1.7 - progress * 0.7})`;
    }

    if (progress === 1) {
      this.cardBottom.style.display = 'none';
      this.numBottomFix.textContent = this.nextValue;
      this.cardBottomFix.style.filter = 'brightness(1)';
      this.saveNext();
    }
  }
}
