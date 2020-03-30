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
        }

        img {
            /* margin-bottom: 30px;  */
        }

        a {
            margin-left: auto;
            padding-top: 10px
        }

        .logout {
            color: red;
            margin-left: 5px;
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
            background: #fff;
            padding: 24px;
            border-radius: 8px;
            position: relative;

            .data {
                display: flex;
                margin-bottom: 10px;
                border-bottom: 1px solid #d6d6d6
            }

                .tower {
                    margin-left: auto;
                }

            button {
                width: 150px;
                height: 30px;
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

            button.whatsapp {
                background: #00bb2d;
            }

            button.email {
                    background: #00b;
                    margin-left: 5px;
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
