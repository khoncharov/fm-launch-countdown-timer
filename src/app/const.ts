import { TimeShiftObject } from './types';

export const TIME_CHECK_TIMEOUT = 50;

export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const MS_PER_HOUR = 1000 * 60 * 60;
export const MS_PER_MINUTE = 1000 * 60;
export const MS_PER_SECOND = 1000;

export enum DigitNumId {
  DAY_TOP_FIX = 'day-top-fix',
  DAY_TOP_FLIP = 'day-top-flip',
  DAY_BOTTOM_FIX = 'day-bottom-fix',
  DAY_BOTTOM_FLIP = 'day-bottom-flip',
  HOUR_TOP_FIX = 'hour-top-fix',
  HOUR_TOP_FLIP = 'hour-top-flip',
  HOUR_BOTTOM_FIX = 'hour-bottom-fix',
  HOUR_BOTTOM_FLIP = 'hour-bottom-flip',
  MINUTE_TOP_FIX = 'minute-top-fix',
  MINUTE_TOP_FLIP = 'minute-top-flip',
  MINUTE_BOTTOM_FIX = 'minute-bottom-fix',
  MINUTE_BOTTOM_FLIP = 'minute-bottom-flip',
  SECOND_TOP_FIX = 'second-top-fix',
  SECOND_TOP_FLIP = 'second-top-flip',
  SECOND_BOTTOM_FIX = 'second-bottom-fix',
  SECOND_BOTTOM_FLIP = 'second-bottom-flip',
}

export enum DigitFlipId {
  DAY_TOP = 'day-top',
  DAY_BOTTOM = 'day-bottom',
  HOUR_TOP = 'hour-top',
  HOUR_BOTTOM = 'hour-bottom',
  MINUTE_TOP = 'minute-top',
  MINUTE_BOTTOM = 'minute-bottom',
  SECOND_TOP = 'second-top',
  SECOND_BOTTOM = 'second-bottom',
}

export const DEFAULT_TIME_SHIFT: TimeShiftObject = {
  days: 0, // 8
  hours: 0, // 23
  minutes: 0, // 56
  seconds: 55, // 0
};
