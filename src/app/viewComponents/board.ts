import { Digit, DigitName } from './digits';
import { parseTimeToDigitValues } from '../utils';

export default class Board {
  private dayDigit = new Digit(DigitName.DAY);

  private hourDigit = new Digit(DigitName.HOUR);

  private minDigit = new Digit(DigitName.MINUTE);

  private secDigit = new Digit(DigitName.SECOND);

  setInitial(data: string) {
    const [d, h, m, s] = parseTimeToDigitValues(data);

    this.dayDigit.setPrev(d);
    this.dayDigit.setNext(d);
    this.hourDigit.setPrev(h);
    this.hourDigit.setNext(h);
    this.minDigit.setPrev(m);
    this.minDigit.setNext(m);
    this.secDigit.setPrev(s);
    this.secDigit.setNext(s);
  }

  showNext(data: string): void {
    const [d, h, m, s] = parseTimeToDigitValues(data);

    console.log('>', d, h, m, s);
  }
}
