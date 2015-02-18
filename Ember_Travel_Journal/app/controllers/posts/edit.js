import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost: function  (post) {
    this.get('model').save()
    },
  },

  resetForm: function  () {
    this.set("name", "")
    this.set("description", "")
    this.set("photo", "")
  }
});
