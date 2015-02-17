import AuthService from './auth.service.js';
import UserService from './user.service.js';

angular.module('services', [])

  .service('AuthService', AuthService)

  .service('UserService', UserService);