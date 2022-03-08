import dayjs from 'dayjs';

export const isValidDate = (date, format = 'MM/DD/YYYY') => {
  date = normalizeDate(date);
  if (date) {
    const validFormat = dayjs(date, format).format(format) === date;
    if (validFormat) {
      return dayjs(date, format).isBefore(dayjs());
    }
    return false;
  }
  return false;
};

/**
 * Normalizes the date by the format 'MM/DD/YYYY'
 *
 * @param {string} input the current typed date
 */
export const normalizeDate = input => {
  if (!input) {
    return input;
  }

  const cur = input.replace(/[^\d]/g, '');
  const curLen = cur.length;

  if (curLen < 3) {
    return cur;
  }

  if (curLen < 5) {
    return `${cur.slice(0, 2)}/${cur.slice(2)}`;
  }

  return `${cur.slice(0, 2)}/${cur.slice(2, 4)}/${cur.slice(4, 8)}`;
};

export const isValidEmail = value => {
  if (value) {
    const reg = new RegExp(/^\S+@\S+\.\S+$/);
    return reg.test(value);
  }
  return false;
};

export const isValidId = (value, format) => {
  if (value) {
    const reg = new RegExp(format);
    return reg.test(value);
  }
  return false;
};

/**
 * Normalizes the employee ID by the format of number
 *
 * @param {string} input the current typed ID
 * @param {string} prev the previous typed ID
 */
export const normalizeEmployeeId = (input, prev, format) => {
  return input;
};

export const isValidPhone = (value, format) => {
  value = normalizePhone(value);
  if (value) {
    const reg = new RegExp(format);
    return reg.test(value);
  }
  // The phone field is not required so the empty one is valid
  return true;
};

/**
 * Normalizes the phone number by the format '123-456-7890'
 *
 * @param {string} input the current typed phone
 */
export const normalizePhone = input => {
  if (!input) {
    return input;
  }

  const cur = input.replace(/[^\d]/g, '');
  const curLen = cur.length;

  if (curLen < 4) {
    return cur;
  }

  if (curLen < 7) {
    return `${cur.slice(0, 3)}-${cur.slice(3)}`;
  }

  return `${cur.slice(0, 3)}-${cur.slice(3, 6)}-${cur.slice(6, 10)}`;
};

export const isValidZipcode = zipcode => {
  const reg = new RegExp(/^[0-9]{5}$/);
  return reg.test(zipcode);
};

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export const getTextWidth = (text, font) => {
  // re-use canvas object for better performance
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d');
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
};

export const getRootFontSize = () => {
  const htmlEl = document.getElementsByTagName('html')[0];
  return parseInt(window.getComputedStyle(htmlEl).fontSize);
};

export const formatDateOfBirth = date => {
  return dayjs(date).format('YYYY-MM-DD');
};
