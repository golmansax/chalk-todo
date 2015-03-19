Chk.TodoCollection = (function () {
  'use strict';

  return Backbone.Collection.extend({

    update: function (id, data) {
      this.get(id).set(data);
    }

  });
})();
