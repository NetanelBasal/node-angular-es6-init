export default (app) => {
  // @ngInject
  app.directive('mainNav', function () {
    return {
      restrict: 'E',
      scope: {},
      controller: 'MainNavController as vm',
      link: link
    };

    function link(scope, elem, attr) {
        console.log('Im in mainNav');
    }

  });

}