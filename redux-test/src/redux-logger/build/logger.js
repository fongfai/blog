'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function logger(_ref) {
  var getState = _ref.getState;

  return function (next) {
    return function (action) {
      var prevState = getState();
      var returnValue = next(action);
      var nextState = getState();
      var time = new Date();

      if (typeof console !== 'undefined') {
        var message = 'action ' + action.type + ' @ ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

        try {
          console.group(message);
        } catch (e) {
          console.log('NOT GROUP');
        }

        console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
        console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
        console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

        try {
          console.groupEnd('—— log end ——');
        } catch (e) {
          console.log('—— log end ——');
        }
      }

      return returnValue;
    };
  };
}

exports['default'] = logger;
module.exports = exports['default'];