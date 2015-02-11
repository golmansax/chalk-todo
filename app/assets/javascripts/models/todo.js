Chk.Todo = (function () {
  'use strict';

  return Backbone.Model.extend({

    parse: function (data) {
      return _(data).extend({
        due_date: moment(data.due_date)
      });
    }

  });
})();
