export const compareFunction = (a, b) => {
  let x = parseInt(a.title.split('_')[0]);
  let y = parseInt(b.title.split('_')[0]);
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
};

export const getLayout = title => {
  const dimension = title.split('_')[1];
  if (dimension === 'V') {
    return 'Vertical';
  } else if (dimension === 'H') {
    return 'Horizontal';
  } else {
    return null;
  }
};
