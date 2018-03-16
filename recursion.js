function getDependencies(mod, result) {
  result = result || [];
  var dependencies = mod && mod.dependencies || [];
  Object.keys(dependencies).forEach(function (dep) {
    var key = dep + '@' + dependencies[dep].version;
    if (result.indexOf(key) === -1) {
      result.push(key);
    }
    getDependencies(dependencies[dep], result);
  });
  return result.sort();
}

module.exports = getDependencies;
