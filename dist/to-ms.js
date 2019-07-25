!(function(e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var f;
    "undefined" != typeof window
      ? (f = window)
      : "undefined" != typeof global
      ? (f = global)
      : "undefined" != typeof self && (f = self),
      (f.toMs = e());
  }
})(function() {
  var define, module, exports;
  module = { exports: (exports = {}) };
  /* jshint -W053 */

  ("use strict");

  module.exports = extended(new Number(0));

  function extended(number) {
    number.second = addMs.bind(number, 1e3, 1);
    number.seconds = addMs.bind(number, 1e3);
    number.minute = addMs.bind(number, 6e4, 1);
    number.minutes = addMs.bind(number, 6e4);
    number.hour = addMs.bind(number, 36e5, 1);
    number.hours = addMs.bind(number, 36e5);
    number.day = addMs.bind(number, 864e5, 1);
    number.days = addMs.bind(number, 864e5);
    number.week = addMs.bind(number, 6048e5, 1);
    number.weeks = addMs.bind(number, 6048e5);
    number.year = addMs.bind(number, 31536e6, 1);
    number.years = addMs.bind(number, 31536e6);
    return number;
  }

  function addMs(mlp, val) {
    val = mlp * (+val || 0);
    return extended(new Number(this + val));
  }

  return module.exports;
});
