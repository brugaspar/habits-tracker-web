import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-auto-flow: row;
  gap: 0.75rem;

  > div {
    color: #a1a1aa;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.75rem;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Habits = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-auto-flow: column;
  gap: 0.75rem;
`;

export const Square = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #18181b;
  border: 2px solid #27272a;
  border-radius: 0.5rem;
  opacity: 0.4;
  cursor: not-allowed;
`;
