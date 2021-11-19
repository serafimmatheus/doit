import styled from "styled-components";

export const Main = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;

    figure {
      width: 100%;
      height: 100vh;
      background-color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }

    form {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;

      h2 {
        font-size: 40px;
        text-align: center;
      }

      input {
        width: 90%;
        height: 60px;
        margin: 0 auto;
        padding: 8px;
      }

      span {
        margin: 0 0 20px 50px;
        color: var(--orange);
      }

      label {
        margin-left: 50px;
      }

      button {
        margin: 10px auto 0 auto;
      }

      .link {
        color: var(--orange);
      }

      .conta {
        color: var(--black);
        margin-top: 20px;
      }

      .home {
        position: absolute;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    form {
      width: 500px;
    }
  }
`;

export const DivForm = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;

    display: flex;

    justify-content: center;
  }
`;

export const DivHomeCadastro = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  .home {
    color: var(--black);
  }
`;
