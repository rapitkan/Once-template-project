module.exports = ['$scope', function ($scope) {

  var currentBreakpoint = "";

  $scope.breakpoints = {};

  $scope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

  window.on_resize = function (c,t) {
    window.onresize = function () {
      clearTimeout(t);
      t = setTimeout(c,100);
    };
    return c;
  };

  window.on_resize(function() {
    var mq_tag = window.getComputedStyle(document.body,':after').getPropertyValue('content');
    if (mq_tag.indexOf("mq-") !== -1) {
      currentBreakpoint = mq_tag.split("-")[1];
      for (var breakpoint in $scope.breakpoints) {
        if ($scope.breakpoints.hasOwnProperty(breakpoint) && breakpoint !== mq_tag) {
          $scope.breakpoints[breakpoint] = false;
          $scope[breakpoint.split("-")[1]] = false;
        }
      }
      if (!$scope.breakpoints[mq_tag]) {
        console.info("Breakpoint ", currentBreakpoint, " reached!");
        $scope.breakpoints[mq_tag] = true;
        $scope[currentBreakpoint] = true;
        $scope.safeApply();
      }
    }
  })();

  return {};
}];