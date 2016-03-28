import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
      publish3(message) {
      var newAnnounce = this.store.createRecord('announcement', message);
      newAnnounce.save();
      this.transitionTo('announcement');
    },

    delete(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcement');
    }
  }
});
