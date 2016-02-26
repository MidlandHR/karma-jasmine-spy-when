+function(jasmine) {
  "use strict";

  var newCallFake = function(myArgument) {
    var argumentListIndex = this.argumentsList.indexOf(myArgument);

    if(argumentListIndex === -1) {
      return this.defaultValue;
    }

    return this.argumentsListValue[argumentListIndex];
  };

  jasmine.SpyStrategy.prototype.whenCalled = function() {
    this.defaultValue = this.defaultValue || null;

    var _this = this;


    return {
      returnDefault: function(value) {
        _this.defaultValue = value;

        _this.callFake(function() {
          return newCallFake.apply(_this, arguments);
        });

        return _this;
      }
    }
  };

  jasmine.SpyStrategy.prototype.whenCalledWith = function(argumentValue) {
    this.argumentsList = this.argumentsList || [];
    this.argumentsListValue = this.argumentsListValue || [];


    var _this = this,
        argumentIndex = this.argumentsList.push(argumentValue) - 1;

    return {
      returnValue: function(value) {
        _this.argumentsListValue[argumentIndex] = value;

        _this.callFake(function () {
          return newCallFake.apply(_this, arguments);
        });

        return _this;
      }
    }
  }
}(window.jasmine);
