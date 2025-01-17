import styled from "styled-components";
import Color from "../../styles/Color";

function MainDiv() {

    const Sectiondiv = styled.h1`
    @font-face {
      font-family: 'Cafe24Decozoo';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/Cafe24Decozoo.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  font-family: 'Cafe24Decozoo';
  `;    

    return (
        <>
        <Sectiondiv style={{
            width:'90%',
            height:'400px',
            backgroundColor:Color.white,
            zIndex:'300',
            position:'absolute'
        }}>
            <div style={{width:'80vw',

            }}>
                

            </div>
        </Sectiondiv>
        </>
    )
}

export default MainDiv