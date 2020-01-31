const moment = require('moment');
const fs = require('fs');

const data = fs
  .readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .filter(Boolean)
  .map(line =>
    line
      .split(';')
      .slice(0, 3)
      .map(el => el.trim())
  )
  .map(([date, i, j]) => ({
    date: moment.utc(Date.parse(date)).toISOString(),
    i: parseFloat(i),
    j: parseFloat(j)
  }));

console.log({ data });
