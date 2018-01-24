const moment = require('moment');

// constructs a time in the UTC time zone
const now = () => new Date().getTime();

// constructs a time in the current time zone
const nowMoment = () => moment();

const timeSince = when => now() - when;

export default {
  now,
  nowMoment,
  timeSince
};
