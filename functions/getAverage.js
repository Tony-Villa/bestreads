const getAverage = (arr) => {
  if (Array.isArray(arr) == false) return 'Argument Must be an array';
  if (arr.length < 1) return `No Reviews Yet`;
  let total = 0;

  arr.map((el) => {
    total += el;
  });

  return (total / arr.length).toFixed(2);
};

module.exports = {
  getAverage,
};
