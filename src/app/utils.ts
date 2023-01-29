import {
  DEFAULT_TIME_SHIFT,
  MIN_VALUE,
  MS_PER_DAY,
  MS_PER_HOUR,
  MS_PER_MINUTE,
  MS_PER_SECOND,
  TimeShift,
} from './const';

export const getTargetTimestamp = (timeShift: TimeShift = DEFAULT_TIME_SHIFT): number => {
  const t = new Date();

  t.setDate(t.getDate() + timeShift.days);
  t.setHours(t.getHours() + timeShift.hours);
  t.setMinutes(t.getMinutes() + timeShift.minutes);
  t.setSeconds(t.getSeconds() + timeShift.seconds);

  return t.getTime();
};

export const timestampToMemoString = (value: number): string => {
  const days = Math.floor(value / MS_PER_DAY);
  const hours = Math.floor((value - days * MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor(
    (value - days * MS_PER_DAY - hours * MS_PER_HOUR) / MS_PER_MINUTE,
  );
  const seconds = Math.floor(
    (value - days * MS_PER_DAY - hours * MS_PER_HOUR - minutes * MS_PER_MINUTE) /
      MS_PER_SECOND,
  );

  return [days, hours, minutes, seconds].join('-');
};

export const parseTimeToDigitValues = (value: string): string[] =>
  value.split('-').map((i) => i.padStart(2, '0'));

export const restrictInput = (e: Event, maxValue: number): void => {
  const input = e.target as HTMLInputElement;
  const value = input.value.slice(-2);

  const numbersOnly = /^[0-9]+$/;

  if (numbersOnly.test(value)) {
    if (+value <= maxValue) {
      input.value = value;
    } else {
      input.value = maxValue.toString();
    }
  } else {
    input.value = MIN_VALUE.toString();
  }
};
