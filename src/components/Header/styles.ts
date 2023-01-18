import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    background: #8b5cf615;
    border: 1px solid #8b5cf6;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    padding-inline: 1.5rem;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: border 0.2s;

    &:hover {
      border-color: #c4b5fd;
    }
  }
`;
