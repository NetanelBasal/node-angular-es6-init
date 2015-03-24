import AuthService from './auth.service.js';
import UserService from './user.service.js';
import SocketIo from './socket.io.service.js';

angular.module('services', [])

  .service('AuthService', AuthService)

  .provider('$socket', SocketIo)

  .service('UserService', UserService);