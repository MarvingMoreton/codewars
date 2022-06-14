function findNeedle(haystack) {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}

function findNeedle(haystack) {
  // a place to store the index
  let index;

  // iterate over the haystack
  for (let i = 0; i < haystack.length; i++) {
    const currentValue = haystack[i];
    // if the current value is equal to 'needle'
    if (currentValue === 'needle') {
      // store the current index in the index variable
      index = i;
      // break out of the for loop
      break;
    }
  }

  return `found the needle at position ${index}`;
}
