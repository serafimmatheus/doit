import styled from "styled-components";

export const SectionDash = styled.section`
  @media screen and (min-width: 320px) {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const FormTarefas = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    margin: 50px auto 0 auto;

    input {
      display: flex;
      height: 40px;
      border-radius: 8px;
      border: 2px solid var(--black);
      padding: 8px;
    }

    button {
      width: 200px;
      display: flex;
      margin: 10px 0 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    input {
      display: flex;
      width: 400px;
      height: 40px;
      border-radius: 8px;
      border: 2px solid var(--black);
      padding: 8px;
    }

    button {
      width: 200px;
      display: flex;
      margin: 0 0 0 10px;
    }
  }
`;

export const MainDash = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 200px;
      border: 2px solid var(--black);
      padding: 10px;
      margin: 15px;

      h4 {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid var(--orange);
        padding-bottom: 10px;

        i {
          color: var(--orange);
          margin-right: 15px;
        }
      }
    }
  }
`;
