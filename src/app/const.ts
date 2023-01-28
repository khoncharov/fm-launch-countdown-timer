import { TimeShiftObject } from './types';

export const TIME_CHECK_TIMEOUT = 50;

export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const MS_PER_HOUR = 1000 * 60 * 60;
export const MS_PER_MINUTE = 1000 * 60;
export const MS_PER_SECOND = 1000;

export const DEFAULT_TIME_SHIFT: TimeShiftObject = {
  days: 0, // 8
  hours: 0, // 23
  minutes: 1, // 56
  seconds: 0, // 0
};
