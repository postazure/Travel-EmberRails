import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route("new");
    this.route('show', {path: "/:post_id"});
    this.route('edit', {path: "/:post_id/edit"});
  });
});

export default Router;
