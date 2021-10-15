const truncate = (str, limit) => {
  return str.length > limit ? str.substr(0, limit - 1) + '...' : str;
};

module.exports = {
  truncate,
};
