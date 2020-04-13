import styled from 'styled-components';

export const Container = styled.section`
form {
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 500px;
    margin: 5% auto;
    border: 1px solid #4f4f4f;
    background-color: rgba(120, 120, 150, 0.3);
    box-shadow: 0px 0px 5px black;

    @media (max-width: 600px) 
    {
      border: none;
      background: none;
      box-shadow: none;
      
    } 

    img {
      margin-bottom: 30px;
    }

    .MuiFormControl-root {
      border: 0;
      margin: 0;
      display: inline-flex;
      padding: 0;
      position: relative;
      width: 80%;
      }

    h1 {
      margin-bottom: 10px;
      font-size: 22px;
      color: #333;
      width: 100%;
      max-width: 350px;
      text-align: center;
      text-transform: uppercase;
    }
    input {
      padding: 10px;
      margin-top: 5px;
      width: 100%;
      max-width: 350px;
    }
    .eye {
      position: absolute;
      top: 10;
      right: 10;
      margin-top: 90px;
      margin-left: 96px;
      cursor: pointer;
      transition: 0.2s ease-out;
    }
    .eye:hover {
      opacity: 0.5;
    }
    button {
      width: 80%;
      max-width: 350px;
      margin-top: 20px;
      transition: 0.2s;
    }
    h3 {
        margin-top: 5px;
    }

    .link:hover {
        text-decoration: underline;
    }

    button:hover {
      filter: brightness(90%);
    }
    .link svg {
      margin-right: 8px;
      margin-top: 5px;
      align-items: center;
    }
  }
`;
