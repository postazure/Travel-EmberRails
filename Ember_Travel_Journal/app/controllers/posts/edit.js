import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost: function  (post) {
      
      var name = this.get("name");
      var description = this.get("description");
      var photo = this.get("photo");

      post.set("name", name);
      post.set("description", description);
      post.set("photo", photo);

      post.save();
      this.set("openPost", null);
    },
  },

  resetForm: function  () {
    this.set("name", "")
    this.set("description", "")
    this.set("photo", "")
  }
});
