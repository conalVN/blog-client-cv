const compareTwoArray = (a, b) => {
  a.sort();
  b.sort();
  if (a.length !== b.length) return false;
  else {
    for (let i = 0; i < a.length; i++) {
      if (!b.some((item) => item === a[i])) {
        return false;
      } else {
        return true;
      }
    }
  }
};

export default compareTwoArray;
