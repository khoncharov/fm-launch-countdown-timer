type DrawFunc = (progress: number) => void;

const arc = (timeFraction: number): number => {
  return 1 - Math.sin(Math.acos(timeFraction));
};

const animateFunction = (
  time: number,
  start: number,
  duration: number,
  drawFunc: DrawFunc,
) => {
  let timeFraction = (time - start) / duration;
  if (timeFraction > 1) {
    timeFraction = 1;
  }

  const progress = arc(timeFraction);

  drawFunc(progress);

  if (timeFraction < 1) {
    requestAnimationFrame((time) => {
      animateFunction(time, start, duration, drawFunc);
    });
  }
};

export const makeAnimation = (duration: number, drawFunc: DrawFunc): void => {
  let start = performance.now();

  requestAnimationFrame((time) => {
    animateFunction(time, start, duration, drawFunc);
  });
};
