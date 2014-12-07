// @ngInject
function myRestsController($scope, projectService) {
  var vm = this;
  projectService.getRests().then(function(res) {
    vm.rests = res.data.rests;
  });

}

module.exports = myRestsController;