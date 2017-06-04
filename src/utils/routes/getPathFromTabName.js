const getPathFromTabName = (tabname) => {
  const SPECIAL_TAB = 'home';
  const filteredTabName = tabname === SPECIAL_TAB ? '' : tabname;
  return ['/', filteredTabName].join('');
};

module.exports = getPathFromTabName;