// import moment from 'moment';
import startOfDay from 'date-fns/start_of_day';
import differenceInDays from 'date-fns/difference_in_days';

const DEPRECATION_MESSAGE = 'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';

export function isSameDay(currentMessage = {}, diffMessage = {}) {
  let diff = 0;
  if (diffMessage.createdAt && currentMessage.createdAt) {
    diff = Math.abs(differenceInDays(startOfDay(diffMessage.createdAt), startOfDay(currentMessage.createdAt)));
  } else {
    diff = 1;
  }
  if (diff === 0) {
    return true;
  }
  return false;
}

export function isSameUser(currentMessage = {}, diffMessage = {}) {

  return !!(diffMessage.user && currentMessage.user && diffMessage.user._id === currentMessage.user._id);

}

export function warnDeprecated(fn) {

  return (...args) => {
    console.warn(DEPRECATION_MESSAGE);
    return fn(...args);
  };

}
