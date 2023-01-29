export const TIME_CHECK_TIMEOUT = 50;
export const SETTINGS_UPDATE_TIMEOUT = 200;

export const MAX_DAYS = 99;
export const MAX_HOURS = 23;
export const MAX_MINUTES = 59;
export const MAX_SECONDS = 59;
export const MIN_VALUE = 0;

export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const MS_PER_HOUR = 1000 * 60 * 60;
export const MS_PER_MINUTE = 1000 * 60;
export const MS_PER_SECOND = 1000;

export interface TimeShift {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const DEFAULT_TIME_SHIFT: TimeShift = {
  days: 8,
  hours: 23,
  minutes: 56,
  seconds: 0,
};

export const INIT_SETTINGS_VALUE = '0';

export const LS_TARGET_TIME_NAME = 'target-time';

export const ANIMATION_DURATION = 800;
