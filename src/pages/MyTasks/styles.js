import styled from 'styled-components';

export const Container = styled.header`
    .cards {
        width: 100%;
        max-width: 1180px;
        padding: 0 30px;
        margin: 32px auto;
        
        header {
        display: flex;
        align-items: center;
        }

        span {
            font-size: 20px;
            margin-left: 20px;
            @media(max-width: 600px) {
                
                    width: 600px;
                    margin: 0 auto;
                    font-size: 20px;
                    margin-left: 10px;
                
            }
        }

        img {
            /* margin-bottom: 30px;  */
        }
        a {
            width: 250px;
            height: 40px;
            background: #000;
            /* background: linear-gradient(90deg,#00c4cc,#7d2ae8); */
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

            @media (max-width: 600px) 
            {
            font-size: 12px;
            width: 300px;;
            margin-right: 5px;
              
            } 
            :hover {
                filter: brightness(80%)   
            }
        }
    
        .logout {
            color: white;
            margin-left: 5px;
            width: 150px;
            background: red;
            @media (max-width: 600px) 
            {
            font-size: 12px;
            width: 180px;;
              
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
            @media (max-width: 600px) 
            {
            font-size: 20px;
            margin-top:40px;  
            text-align: center;
            } 

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        @media (max-width: 600px) 
        {
            display: flex;
            flex-direction: column;
          
        } 

        li {
            background: #fff;
            padding: 24px;
            border-radius: 8px;
            position: relative;

            button {
                position: absolute;
                right: 24px;
                top: 24px;
                border: 0;

                color: red; 

                :hover {
                    opacity: 0.8;   
                }
            }

            strong {
                margin-bottom: 10px;
                color: #41414d;
            }

            p + strong{
                margin-top: 32px
            }

            p {
                color: #737380;
                line-height: 21px;
                font-size: 16px;
                margin-bottom: 5px;
            }
        }
    }
`
