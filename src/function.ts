function calculatetax(income: number, taxyear: number): number {
  if (income <= 0 && taxyear <= 2010) {
    return 0;
  } else {
    return income - 10000;
  }
}
console.log(calculatetax(20000, 2021));
//? for optional parameter