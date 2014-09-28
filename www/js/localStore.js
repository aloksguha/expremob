/**
 * Created by aguha on 28-09-2014.
 */


'use strict';

exports.localStore = function() {
    var localStore = {};
    var _api = {
        getStoreValue : function(key){
          return localStore[key];
        },

        setStoreValue : function(key, value){
          localStore[key] = value;
        }

    }


    return _api;

}