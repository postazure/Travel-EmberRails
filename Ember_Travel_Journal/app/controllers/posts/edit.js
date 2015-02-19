import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost: function  () {
    this.get('model').save()
    },
  },
});
