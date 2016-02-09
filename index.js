var createPattern = function(path) {
  return {
    pattern: path,
    included: true,
    served: true,
    watched: false
  };
};

var initJasmine_spyWhen = function(files) {
  files.unshift(createPattern(__dirname + '/jasmine-spy-when.js'));
};

initJasmine_spyWhen.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-spy-when': ['factory', initJasmine_spyWhen]
};
