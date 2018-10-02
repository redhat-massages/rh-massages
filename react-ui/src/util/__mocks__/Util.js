const get = jest.fn((url, update) => { update([]); });
const post = jest.fn((url, data, update, notify = true) => { update(); });
const put = jest.fn((url, data, update, notify = true) => { update(); });
const notify = jest.fn();
const clearAllIntervals = jest.fn();
const addToCalendar = jest.fn();

const isEmpty = jest.fn((object) => {
  return (object === null) || (typeof object === 'undefined') || (object === '');
});

const findInArrayById = jest.fn((array, id) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
  }
  return -1;
});

module.exports = {
  get,
  post,
  put,
  notify,
  clearAllIntervals,
  addToCalendar,
  isEmpty,
  findInArrayById
}