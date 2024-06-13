import ISODateTimeDisplay from './ISODateTimeDisplay';
const formatDate = (date: Date) => date.toLocaleDateString();
const formatTime = (date: Date) => date.toLocaleTimeString();

const dateAndTimeConfig = (language: string) => {
  return Intl.DateTimeFormat(language, {
    ...{day: '2-digit', month: '2-digit', year: 'numeric'},
    ...{hour: '2-digit', minute: '2-digit', second: '2-digit'},
  });
};

const formatDateAndTime = (date: Date) => {
  return dateAndTimeConfig(navigator.language).format(date);
};

export {formatDate, formatDateAndTime, formatTime, dateAndTimeConfig, ISODateTimeDisplay};
