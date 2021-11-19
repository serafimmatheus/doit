import styled from "styled-components";

export const BtnGlobal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 200px;

  border: 1px solid var(--black);
  border-radius: 8px;

  padding: 8px;
  background-color: ${(props) => (props.bgcolor ? "var(--black)" : "white")};
  color: ${(props) => (props.bgcolor ? "var(--vanilla)" : "var(--black)")};
`;
