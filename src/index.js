module.exports = function reverse (n) {
  let str = n.toString()
  let result = ''
  for(let i = str.length - 1; i >= 0; i--)
  {
    result += str[i]
  }

  return parseInt(result)
}
