import Ember from 'ember';
import computed from 'ember-computed-decorators';
import connect from 'ember-redux/components/connect';

const { Component, String } = Ember;

const stateToComputed = ({ data }) => ({
  content: data.content,
  left: data.left,
  top: data.top,
  color: data.color
});

const SpinningCircleComponent = Component.extend({
  classNames: ['box-view'],

  @computed('top', 'left', 'color')
  style(t, l, c) {
    const newStyle = `top: ${t}px; left: ${l}px; background: rgb(0,0,${c});`;
    return String.htmlSafe(newStyle);
  }

});

export default connect(stateToComputed)(SpinningCircleComponent);
