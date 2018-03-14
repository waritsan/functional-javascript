module.exports = function (arr, fn, thisArg) {
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}