'use strict'

/**
 * $hello provider
 */
class $hello {

  constructor() {
    this.providers = {};
    this.options = {};
    this.$hello = window.hello;
  }

  setProviders( providers, options ) {
    this.providers = providers;
    this.options = options;
    this.$hello.init(this.providers, this.options);
  }

// @ngInject
  $get( $q ) {
    return {
      $hello   : this.$hello,
      providers: this.providers,
      login( providerName, options ) {
        let deferred = $q.defer();
        if( this.providers[providerName] ) {
          this.$hello.login(providerName, options).then(() => {
            return deferred.resolve('Login successfull');
          }, ( err ) => {
            return deferred.reject(err);
          })
          return deferred.promise;

        } else {
          throw new Error('Provider is not defined');
        }
      },

      logOut( providerName ) {
        let deferred = $q.defer();
        if( this.providers[providerName] ) {
          this.$hello.logout(providerName, options).then(() => {
            return deferred.resolve('Logout successfull');
          }, ( err ) => {
            return deferred.reject(err);
          });
          return deferred.promise;

        } else {
          throw new Error('Provider is not defined');
        }
      },

      api( providerName, path ) {
        let deferred = $q.defer();
        this.$hello(providerName).api(path).then(( json ) => {
          return deferred.resolve(json);
        }, ( err ) => {
          return deferred.reject(err);
        });
        return deferred.promise;

      }

    }
  }

}

export default $hello;




