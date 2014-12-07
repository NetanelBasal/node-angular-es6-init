var fs = require('fs-extra');
var path = require('path');
var openDB = require('json-file-db');
var faker = require('faker');
var q = require('q');
var _ = require('lodash');

/**
 *
 * @param data
 * @constructor
 */
function RestApi( data ) {

  this.dbPath = data.dbPath;
  this.fullPath = path.join(this.dbPath, data.table)
  this.numRows = data.numRows;
  this.columnsStructure = data.columnsStructure;
  this.columns = [];
  this.column = {};

  /**
   * create directory for store the db json file
   */
  this.createDir = function() {
    fs.mkdirsSync(this.dbPath);
  }

  /**
   * prepare columns data
   * @returns {Array}
   */
  this.prepareColumnData = function() {
    var self = this;
    for( var i = 0; i < this.numRows; i ++ ) {
      this.columnsStructure.forEach(function( col ) {
        self.column.id = i + 1;
        if( col.columnType.selected.modelName == 'bool' ) {
          self.column[col.columnName] = self.randomBoolean();
        } else if( col.columnType.selected.modelName == 'null' ) {
          self.column[col.columnName] = self.nullValue();
        } else if( col.allowRandNull ) {
          if( i % 3 == 0 ) {
            self.column[col.columnName] = null;
          } else {
            self.column[col.columnName] = faker[col.columnType.selected.group][col.columnType.selected.modelName]();
          }
        } else if( col.columnType.selected.modelName == 'rel' ) {
          self.column[col.columnName] = self.rel();
        } else {
          self.column[col.columnName] = faker[col.columnType.selected.group][col.columnType.selected.modelName]();
        }
      });
      this.columns.push(this.column);
      self.column = {};
    }
    return this.columns;
  }

  /**
   * genearte boolean column type
   * @returns {*|boolean}
   */
  this.randomBoolean = function() {
    return Boolean(_.random(0, 1));
  }

  /**
   *
   * @returns {null}
   */
  this.nullValue = function() {
    return null;
  }

  /**
   * generate relationship id
   * @returns {*}
   */
  this.rel = function() {
    return _.sample(_.range(1, this.numRows));
  }

  /**
   * write data to a file
   */
  this.create = function() {
    var self = this,
        deferred = q.defer();

    this.createDir();

    this.prepareColumnData();

    fs.writeJson(this.fullPath, this.columns, function( err ) {
      if( err ) deferred.reject(new Error(error));
      deferred.resolve(self.fullPath);
    });

    return deferred.promise;
  }

}

module.exports = RestApi;