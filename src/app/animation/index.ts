import { Digit } from '../components/digits';

const arc = (timeFraction: number): number => {
  return Math.pow(timeFraction, 2);
};

export const animateFunction = (
  time: number,
  start: number,
  duration: number,
  digits: Digit[],
) => {
  let timeFraction = (time - start) / duration;
  if (timeFraction > 1) {
    timeFraction = 1;
  }

  const progress = arc(timeFraction);

  digits.forEach((digit) => {
    digit.redraw(progress);
  });

  if (timeFraction < 1) {
    requestAnimationFrame((time) => {
      animateFunction(time, start, duration, digits);
    });
  }
};
