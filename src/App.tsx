import styled from "styled-components";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

export function App() {
  return (
    <Container>
      <Content>
        <Header />
        <SummaryTable />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100vw;
  max-width: 64rem;
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
