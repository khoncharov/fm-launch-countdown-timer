import { Digit, DigitName } from './digits';
import { parseTimeToDigitValues } from '../utils';
import { animateFunction } from '../animation';
import { ANIMATION_DURATION } from '../const';

export default class Board {
  private dayDigit = new Digit(DigitName.DAY);

  private hourDigit = new Digit(DigitName.HOUR);

  private minDigit = new Digit(DigitName.MINUTE);

  private secDigit = new Digit(DigitName.SECOND);

  setInitial(data: string) {
    const [d, h, m, s] = parseTimeToDigitValues(data);

    this.dayDigit.setInit(d);
    this.hourDigit.setInit(h);
    this.minDigit.setInit(m);
    this.secDigit.setInit(s);
  }

  showNext(data: string): void {
    const [d, h, m, s] = parseTimeToDigitValues(data);

    console.log('>>>', d, h, m, s); // DEBUG -------------------------

    this.dayDigit.setNext(d);
    this.hourDigit.setNext(h);
    this.minDigit.setNext(m);
    this.secDigit.setNext(s);

    const doAnimation: Digit[] = [];

    if (this.dayDigit.isChanged()) {
      doAnimation.push(this.dayDigit);
    }

    if (this.hourDigit.isChanged()) {
      doAnimation.push(this.hourDigit);
    }

    if (this.minDigit.isChanged()) {
      doAnimation.push(this.minDigit);
    }

    if (this.secDigit.isChanged()) {
      doAnimation.push(this.secDigit);
    }

    this.makeAnimation(ANIMATION_DURATION, doAnimation);
  }

  makeAnimation(duration: number, digits: Digit[]): void {
    const start = performance.now();

    requestAnimationFrame((time) => {
      animateFunction(time, start, duration, digits);
    });
  }
}
