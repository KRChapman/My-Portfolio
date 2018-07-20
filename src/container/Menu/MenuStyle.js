import styled from 'styled-components';


const Container = styled.div`
                width: ${props => props.theme.horizontal};
                height: 1000px;
                border: 1px solid red;
                display: inline-block;
                position: fixed;
                
                `;


const Styled = {Container};

export default Styled