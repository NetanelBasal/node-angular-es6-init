export default (app) => {
  // @ngInject
  app.directive('home', () => {
    return {
      restrict: 'E',
      templateUrl: 'app/home/views/home.tpl.html',
      scope: {},
      controller: 'HomeController as home',
      link: link
    };

    function link(scope, elem, attr) {
        console.log('Im in home');
    }

  });

}