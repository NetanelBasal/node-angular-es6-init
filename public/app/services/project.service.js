// @ngInject
function projectService( $http ) {

  this.getColumnsTypes = function() {
    return $http.get('/app/columns-type.json');
  }

  this.createProject = function( data ) {
    return $http.post('project/create-project', data);
  }

  this.getRests = function() {
    return $http.get('project/account');
  }
}

module.exports = projectService;
