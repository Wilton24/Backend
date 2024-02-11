export function greeting(weekDayEnd, buhatonon) {
  const currentDate = new Date();
  let weekDayEnd = "";
  let buhatonon = "";
  if (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
    weekDayEnd = `a week end`;
    buhatonon = `Time to laag!`;
  } else {
    weekDayEnd = `week day`;
    buhatonon = `pag study doh`;
  }
}
