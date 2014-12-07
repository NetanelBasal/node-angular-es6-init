angular.module('services', [])

.service('authService', require('./auth.service.js'))

.service('userService', require('./user.service.js'))

.service('projectService', require('./project.service.js'))