import Ember from 'ember';

export default Ember.Route.extend({
  publish3() {
    var newAnnounce = this.store.createRecord('announcement', message);
    newAnnounce.save();
    this.transitionTo('index');
  }
});
