import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function  () {
      // console.log("detected")
      var name = this.get("name")
      var description = this.get("description")
      var photo = this.get("photo")

      var post = this.store.createRecord("post", {
        name: name,
        description: description,
        photo: photo
      });
      
      post.save().then(function  () {
        alert("Record Saved")
      })
    },

    deletePost: function  (post) {
      this.store.find("post", post.id).then(function  (post) {
        post.destroyRecord()
      })
    }
  }
});
