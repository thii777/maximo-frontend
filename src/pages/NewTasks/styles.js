import styled from 'styled-components';

export const Container = styled.header`
  .cards {
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    .logo {
      width: 150px;

      img {
        margin-left: 30px;
      }

      p {
        text-align: left;
      }
    }

    header {
      display: flex;
      align-items: center;
    }

    span {
      font-size: 20px;
    }

    a {
      width: 150px;
      height: 40px;
      background: #ff0000;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      padding-top: 10px;
      margin: 0 0 0 auto;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      align-items: center;
      transition: filter 0.2s;

      :hover {
        filter: brightness(80%);
      }
    }
  }
`;

export const Tasks = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      input {
        width: 100%;
        height: 30px;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        padding: 0 24px;
      }

      textarea {
        width: 100%;
        min-height: 165px;
        resize: vertical;
        color: #333;
        padding: 16px 24px 130px 24px;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
      }

      button {
        width: 100px;
        height: 20px;
        background: #00c4cc;
        /* background: linear-gradient(90deg,#00c4cc,#7d2ae8); */
        border: 0;
        border-radius: 3px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
        transition: filter 0.2s;
        margin-top: 10px;
        margin-left: auto;

        :hover {
          opacity: 0.8;
        }
      }

      strong {
        margin-bottom: 10px;
        color: #41414d;
      }

      .second-strong {
        margin-top: 12px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
  }
`;
