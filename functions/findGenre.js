const findGenre = (arr) => {
  let uniqueGenres = [];

  arr.map((el) => {
    if (!uniqueGenres.includes(el.genre)) {
      uniqueGenres.push(el.genre);
    } else {
      return;
    }
  });

  return uniqueGenres;
};

module.exports = {
  findGenre,
};
