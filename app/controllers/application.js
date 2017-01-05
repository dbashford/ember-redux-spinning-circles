import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import _defer from 'lodash/defer';
import _range from 'lodash/range';

const NUM_CIRCLES = 100;

const { Controller } = Ember;

const stateToComputed = ({ data }) => ({
  diff: data.diff,
});

const dispatchToActions = (dispatch) => ({
  tick: () => dispatch({ type: 'TICK' }),
});

const ApplicationController = Controller.extend({

  init() {
    this.numCircles = _range(NUM_CIRCLES);
    this.sendTick();
  },

  sendTick() {
    this.send('tick');
    window.timeout = _defer(this.sendTick.bind(this));
  }
});

export default connect(stateToComputed, dispatchToActions)(ApplicationController);
