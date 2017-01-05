import _mean from 'lodash/mean';
import _round from 'lodash/round';

const initialState = {
  content: 0,
  count: 0,
  left: 0,
  top: 0,
  color: 0,
  diff: 0
};

let date = +new Date();

const diffs = [];

const data = ((state) => {

  if (!state) {
    return initialState;
  }

  const count = state.count + 1;

  let diff;
  if (count % 100 === 0) {
    const now = +new Date();
    diffs.push(now - date)
    diff = _round(_mean(diffs));
    date = now;
  }

  return {
    count,
    top: Math.sin(count / 10) * 10,
    left: Math.cos(count / 10) * 10,
    color: count % 255,
    content: count % 100,
    diff: diff || state.diff
  };

});

export default {
  data
};