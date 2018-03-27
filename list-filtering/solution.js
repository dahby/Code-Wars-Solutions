function filter_list(l) {
  let filtered = l.filter(x => typeof x === 'number')
  return filtered
}