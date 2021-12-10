function withdraw(n) {
  const limit = Math.trunc(n / 20);
  let fifty = 0;
  let twenty = 0;
  let hundred = 0;
  for (let k = 0; k <= limit; k++) {
    for (let i = 0; i <= limit; i++) {
      for (let j = 0; j <= limit; j++) {
        if (k * 100 + i * 50 + j * 20 === n) {
          fifty = i;
          twenty = j;
          hundred = k;
        }  
      }
    }
  }
  return [hundred, fifty, twenty];
}