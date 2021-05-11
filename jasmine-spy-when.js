+function(jasmine) {
  "use strict";

  var newCallFake = function(myArgument) {
    var hasMockedValue = this.argumentsMap.has(myArgument);

    if(!hasMockedValue) {
      return this.defaultValue;
    }

    return this.argumentsMap.get(myArgument);
  };

  jasmine.SpyStrategy.prototype.whenCalled = function() {
    this.argumentsMap = this.argumentsMap || new Map();
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
    this.argumentsMap = this.argumentsMap || new Map();

    var _this = this;

    return {
      returnValue: function(value) {
        _this.argumentsMap.set(argumentValue, value)

        _this.callFake(function () {
          return newCallFake.apply(_this, arguments);
        });

        return _this;
      }
    }
  }
}(window.jasmine);
