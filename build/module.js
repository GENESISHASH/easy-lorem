(function() {
  var log, lorem, text, _,
    __slice = [].slice;

  log = function() {
    var x;
    x = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    try {
      return console.log.apply(console, x);
    } catch (_error) {}
  };

  _ = require('wegweg')({
    globals: false
  });

  text = require('./text');

  module.exports = lorem = {
    std: (function() {
      var help;
      help = ((function(_this) {
        return function(code) {
          log("Usage: .");
          return exit(code != null ? code : 0);
        };
      })(this));
      if (_.arg('help')) {
        help();
      }
      return this.run();
    }),
    run: (function() {
      return _.first(_.shuffle(text));
    })
  };

  if (!module.parent || process.env.LOREM_STD) {
    log(lorem.run());
  }

}).call(this);
