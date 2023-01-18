import { Plus } from "phosphor-react";
import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Habits" />
      <button type="button">
        <Plus size={20} color="#8b5cf6" />
        Novo hábito
      </button>
    </Container>
  );
}
