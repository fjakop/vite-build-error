const formatDate = (date: Date) => date.toLocaleDateString();
const formatTime = (date: Date) => date.toLocaleTimeString();
const formatDateAndTime = (date: Date) => formatDate(date) + ' ' + formatTime(date);

export {formatDate, formatDateAndTime, formatTime};
