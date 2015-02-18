import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function  () {
      var name = this.get("name");
      var description = this.get("description");
      var photo = this.get("photo");

      var post = this.store.createRecord("post", {
        name: name,
        description: description,
        photo: photo
      });

      var that = this;
      post.save().then(function  () {
        alert("Record Saved");
        that.resetForm();
      });
    },
  },

  resetForm: function  () {
    this.set("name", "")
    this.set("description", "")
    this.set("photo", "")
  }
});
