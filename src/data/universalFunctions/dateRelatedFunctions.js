export const convertUTCDateToLocalDate = date => {
  let newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return newDate;
};

export const convertISODateToReadableDate = date => {
  return (
    date.getHours() +
    ":" +
    date.getMinutes() +
    "  (" +
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    ")"
  );
};
