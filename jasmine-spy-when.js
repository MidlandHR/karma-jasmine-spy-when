+function(jasmine) {
  "use strict";

  jasmine.SpyStrategy.prototype.whenCalledWith = function(argumentValue) {
    this.argumentsList = this.argumentsList || [];
    this.argumentsListValue = this.argumentsListValue || [];

    var _this = this,
      argumentIndex = this.argumentsList.push(argumentValue) - 1;

    var newCallFake = function(myArgument) {
      var argumentListIndex = _this.argumentsList.indexOf(myArgument);

      if(argumentListIndex === -1) {
        return;
      }

      return _this.argumentsListValue[argumentListIndex];
    };

    return {
      returnValue: function(value) {
        _this.argumentsListValue[argumentIndex] = value;

        _this.callFake(newCallFake);
      }
    }
  }
}(window.jasmine);
