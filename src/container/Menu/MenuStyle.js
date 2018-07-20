import styled from 'styled-components';


const Container = styled.div`
                width: ${props => props.theme.horizontal};
                height: 1000px;
                border: 1px solid red;
                background: blue;
                display: inline-block;
                position: fixed;

                 @media (max-width: ${props => props.theme.mediaQuery}) {
                  transform: translateX(-100%);
                }
                
                `;
                


const Styled = {Container};

export default Styled