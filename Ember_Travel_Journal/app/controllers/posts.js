import Ember from 'ember';

export default Ember.Controller.extend({
  openPost: null,
  actions: {
    
    deletePost: function  (post) {
      post.destroyRecord().then(function  () {
        alert("Record Deleted");
      });      
    },
  }
});
