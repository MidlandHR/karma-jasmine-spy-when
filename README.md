# karma-jasmine-spy-when

Allows for easier conditional return values on jasmine spies

## Install

```
$ npm install karma-jasmine-spy-when --save-dev
```

## Usage

```js
  var mySpy = jasmine.createSpy(),
    myObj = { h: 1 };

  mySpy.and.whenCalled().returnDefault('This is default');
  mySpy.and.whenCalledWith('hello').returnValue('its me');
  mySpy.and.whenCalledWith(1).returnValue('dave');
  mySpy.and.whenCalledWith(myObj).returnValue('doh');
  mySpy.and.whenCalledWith().returnValue('nothing passed');

  console.log(mySpy('hello'));       // returns 'its me'
  console.log(mySpy(1));             // returns 'dave'
  console.log(mySpy(myObj));         // returns 'doh'
  console.log(mySpy());              // returns 'nothing passed'
  console.log(mySpy('unspecified')); // returns the default value 'This is default'
```