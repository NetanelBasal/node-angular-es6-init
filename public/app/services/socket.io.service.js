/**
 * SocketIoService
 */
class SocketIo {

  constructor() {
    this.host = 'http://localhost:3000';
  }

  setHost( host ) {
    this.host = host;
  }

  // @ngInject
  $get( $rootScope ) {
    return {

      socket: io.connect(),

      on( eventName, callback ) {
        this.socket.on(eventName, ( ...data ) => {
          $rootScope.$apply(() => {
            callback.apply(this.socket, data);
          });
        });
      },

      emit( eventName, data, callback ) {
        this.socket.emit(eventName, data, ( ...data ) => {

          $rootScope.$apply(() => {
            if( callback ) {
              callback.apply(this.socket, data);
            }
          });
        });
      },

      removeAllListeners( eventName, callback ) {
        this.socket.removeAllListeners(eventName, ( ...data ) => {
          $rootScope.$apply(() => {
            callback.apply(this.socket, data);
          });
        });
      },

      removeListener() {
        this.socket.removeListener(name, fn);
      }
    }
  }

}

export default SocketIo