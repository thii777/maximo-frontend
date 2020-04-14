const { createGlobalStyle } = require('styled-components');

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
  background: #ccc;
}
body, input, button {
  font-size: 14px Roboto, sans-serif;

  }
  #root {
      margin: 0 auto;
      padding: 0;
      margin: 0;
  }
  button {
      cursor: pointer;
  }

  form input {
    width: 250px;
    height: 40px;
    color: #333;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 0 24px;
    margin: 5px 0 0 0;
  }

  .button {
    width: 250px;
    height: 40px;
    background: #00c4cc;
    /* background: linear-gradient(90deg,#00c4cc,#7d2ae8); */
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin: 10px 0 5px 0;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: filter 0.2s;
  }

  .link {
      text-decoration: none;
      list-style: none;
      color: #333;
      margin-top: 5px;
    }
    
    .back {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    background: url('https://live.mrf.io/statics/i/ps/amenteemaravilhosa.com.br/wp-content/uploads/2018/04/como-ajudar-a-um-idoso-que-esta-triste.jpg');
    background-size: 100% 100%;
    background-position: center;
    opacity: 0.5;
    z-index: -9999;
    @media (max-width: 600px) 
    {
      background: none;
     }
  }

  
`;
