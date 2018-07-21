import styled, {css} from 'styled-components';
const Container = styled.header`
${props => console.log('aa',props.showToggleMenu) }
  margin-left: ${props => props.theme.horizontal};
  position: fixed;
  right: 0;
  text-align: center;
  background-color: #273135;
  display: flex;
  justify-content: space-between;
  height: ${props => props.theme.verticle};

  width: calc(100% - ${props => props.theme.horizontal});

  transition: transform ${props => props.theme.transitionTime} ease-out;
  transition: width 0.3s ease-out;
  z-index: ${props => props.theme.zindexHighest};


   @media (max-width: ${props => props.theme.mediaQuery}) {
                /* margin-left: 0; */
                  /* left: 0; */
                  width: 100%;
                /* border: 5px solid green; */
                  /* transform: translateX(0); */
                }


              
  ${ props => props.showToggleMenu && css`
    /* width: 100%;
    transform: translateX(0); */
    /* border: 5px solid pink; */
  
       @media (min-width: 1px) {
                /* margin-left: 0; */
                  /* left: 0; */
             width: calc(100% - ${props => props.theme.horizontal});
       
                /* border: 5px solid green; */
                  /* transform: translateX(0); */
                }
  `};

`;
//  transform: translateX(${ props => props.theme.horizontal });
//      
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