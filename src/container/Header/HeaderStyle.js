import styled from 'styled-components';
const Container = styled.header`
  margin-left: ${props => props.theme.horizontal};
  position: fixed;
  right: 0;
  text-align: center;
  background-color: #273135;
  display: flex;
  justify-content: space-between;
  height: ${props => props.theme.verticle};

  width: calc(100% - ${props => props.theme.horizontal});


  z-index: ${props => props.theme.zindexHighest};

   @media (max-width: ${props => props.theme.mediaQuery}) {
                margin-left: 0;
                  left: 0;
                  width: 100%;
                }
`

const NavBtnsContainer = styled.nav`
  display: flex;
  width: 300px;
  height: 100%;
  justify-content: space-around;

 `

 const Title = styled.h2`
  color: #fff;
  margin-left: 5px;
    @media (max-width: 420px) {
                font-size: 16px;
                }
 
 `


//   <nav>
//     <h2>Title</h2>
//     <button>Custimize Settings</button>
//   </nav>

const Style = { Container, NavBtnsContainer, Title}

export default Style;