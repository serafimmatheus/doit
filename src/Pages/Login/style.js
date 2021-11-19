import styled from "styled-components";

export const MainLogin = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;

    figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;

      background-color: var(--black);

      img {
        width: 100%;
      }
    }

    div {
      width: 100%;
      height: 100vh;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      form {
        width: 100%;
        display: flex;
        flex-direction: column;

        h2 {
          margin-bottom: 20px;
          text-align: center;
          font-size: 40px;
        }

        label {
          margin-top: 15px;
          margin-left: 40px;
        }

        input {
          width: 90%;
          height: 60px;
          padding: 8px;
          margin: 0 auto;

          border: 1px solid var(--black);
        }

        button {
          width: 200px;
          margin: 20px auto;
        }

        .login {
          margin-left: 50px;
          color: var(--black);
        }

        .link {
          color: var(--orange);
        }

        span {
          color: var(--orange);
          margin-left: 40px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: 1440px) {
    div {
      form {
        width: 400px;
      }
    }
  }
`;

export const DivHomeLogin = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  .home {
    color: var(--black);
  }
`;
