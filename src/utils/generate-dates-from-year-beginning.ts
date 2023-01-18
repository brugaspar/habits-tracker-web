import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
  const firstDayOfYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let comparedDate = firstDayOfYear;

  while (comparedDate.isBefore(today)) {
    dates.push(comparedDate.toDate());
    comparedDate = comparedDate.add(1, "day");
  }

  return dates;
}
