import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  h2 {
    font-size: 60px;

    span {
      color: var(--orange);
    }
  }

  p {
    margin: 10px 0 30px 0;
    font-size: 30px;
    width: 300px;
    text-align: center;
  }

  div {
    display: flex;

    button {
      margin: 0 20px;
    }
  }
`;
