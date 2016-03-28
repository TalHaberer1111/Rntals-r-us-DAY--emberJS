import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },
    publish1() {
      var message = {
        message: this.get('message')
      };
      this.set('addNewMessage', false);
      this.sendAction('publish2', message);
    }
  }
});
