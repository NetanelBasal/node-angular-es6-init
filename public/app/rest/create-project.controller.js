(function() {
  'use strict'

  // @ngInject
  function cretaeProjectController( $scope, projectService, $http, $state ) {
    var vm = this;

    projectService.getColumnsTypes().then(function( res ) {
      vm.columnsTypes = res.data;
    });

    this.columns = [
      {
        columnName: ''
      }
    ];

    var column = {
      columnName: ''
    }

    this.addColumn = function() {
      this.columns.push(_.clone(column));
    }

    this.removeColumn = function( col ) {
      this.columns.splice(this.columns.indexOf(col), 1);
    }



    this.createTable = function() {
      $scope.waitMe = true;
      if( $scope.projectForm.$valid ) {
        $scope.project.columns = this.columns;
        projectService.createProject($scope.project).then(function( res ) {
          $scope.waitMe = false;
          swal({
            title             : "Table created Successfully!",
            text              : "What You Want to do?",
            type              : "success",
            showCancelButton  : true,
            confirmButtonColor: "#55D4DD",
            confirmButtonText : "Go to My Account",
            cancelButtonText  : "Add More Table",
            closeOnConfirm    : true,
            closeOnCancel     : true
          }, function( isConfirm ) {
            if( isConfirm ) {
              $state.go('my-rests');
            } else {
              $scope.project.table = '';
              vm.columns = [];
              vm.columns.push(_.clone(column));
              $scope.projectForm.$setPristine();
              $scope.$digest();
            }
          });
        });
      }
    }

    $scope.someGroupFn = function( col ) {
      return col.group;
    };

  }

  module.exports = cretaeProjectController;
})();


