import styled from 'styled-components';
const Container = styled.header`
  margin-left: ${props => props.theme.horizontal};
  position: fixed;
  right: 0;
  background-color: #273135;
  display: flex;
  justify-content: flex-end;
  height: ${props => props.theme.verticle};

  width: calc(100% - ${props => props.theme.horizontal});

  border: 1px solid orange;
  z-index: ${props => props.theme.zindexHighest};
`

const NavBtnsContainer = styled.nav`
  display: flex;
  width: 300px;
  height: 100%;

  /* position: absolute;
  right: 0; */

 `


//   <nav>
//     <h2>Title</h2>
//     <button>Custimize Settings</button>
//   </nav>

const Style = { Container, NavBtnsContainer}

export default Style;