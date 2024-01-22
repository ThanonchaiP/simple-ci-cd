import dayjs, { type ConfigType } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const useDateFormat = (locale?: string) => {
  const format = (date: ConfigType) => {
    if (!locale)
      return dayjs(date).format('DD/MM/YYYY HH:mm');
    try {
      return dayjs(date)
        .tz(locale)
        .format('DD/MM/YYYY HH:mm');
    } catch (error) {
      return dayjs(date).format('DD/MM/YYYY HH:mm');
    }
  };

  const isValidDate = (date: ConfigType) => {
    return dayjs(date).isValid();
  };

  return { date: dayjs, format, isValidDate };
};

export default useDateFormat;
