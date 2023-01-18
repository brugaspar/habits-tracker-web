import { generateDatesFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import { Container, Habits, Square, WeekDays } from "./styles";
import { HabitDay } from "../HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <Container>
      <WeekDays>
        {weekDays.map((weekDay, index) => (
          <div key={`${weekDay}-${index}`}>{weekDay}</div>
        ))}
      </WeekDays>
      <Habits>
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()} />
        ))}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => <Square key={index} />)}
      </Habits>
    </Container>
  );
}
