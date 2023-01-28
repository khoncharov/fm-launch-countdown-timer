import { Digit, DigitName } from './digits';

export default class Board {
  private dayDigit = new Digit(DigitName.DAY);

  private hourDigit = new Digit(DigitName.HOUR);

  private minDigit = new Digit(DigitName.MINUTE);

  private secDigit = new Digit(DigitName.SECOND);

  setInitial(data: string) {
    const [d, h, m, s] = data.split('-').map((i) => i.padStart(2, '0'));

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
    console.log('>', data);
  }
}
