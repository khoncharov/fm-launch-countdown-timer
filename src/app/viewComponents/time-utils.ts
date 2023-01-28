import {
  DEFAULT_TIME_SHIFT,
  MS_PER_DAY,
  MS_PER_HOUR,
  MS_PER_MINUTE,
  MS_PER_SECOND,
} from '../const';
import { TimeShiftObject } from '../types';

export const getTargetTime = (timeShiftObject: TimeShiftObject = DEFAULT_TIME_SHIFT) => {
  const t = new Date();

  t.setDate(t.getDate() + timeShiftObject.days);
  t.setHours(t.getHours() + timeShiftObject.hours);
  t.setMinutes(t.getMinutes() + timeShiftObject.minutes);
  t.setSeconds(t.getSeconds() + timeShiftObject.seconds);

  return t.getTime();
};

export const timeStampConverter = (timeStamp: number): number[] => {
  const days = Math.floor(timeStamp / MS_PER_DAY);
  const hours = Math.floor((timeStamp - days * MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor(
    (timeStamp - days * MS_PER_DAY - hours * MS_PER_HOUR) / MS_PER_MINUTE,
  );
  const seconds = Math.floor(
    (timeStamp - days * MS_PER_DAY - hours * MS_PER_HOUR - minutes * MS_PER_MINUTE) /
      MS_PER_SECOND,
  );

  return [days, hours, minutes, seconds];
};
