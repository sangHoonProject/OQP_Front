import styled from "styled-components";
import Color from "../../styles/Color"

const Headerlogo = styled.h1`
  @font-face {
    font-family: 'EliceDigitalBaeum_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
font-family: 'EliceDigitalBaeum_Bold';
`;

function Headers() {
    return (
        <>
        <div style={{width:'100%',
            height:'150px',
            backgroundColor:Color.topcolor,
            display:"flex",
            justifyContent:'center',
            lineHeight:'100px',
            zIndex:'100'
        }}>
            
            <Headerlogo style={{color:Color.white ,
            fontSize : '70px',
            textAlign:'center'}}>OQP.</Headerlogo>
        </div>
        </>
    )
}

export default Headers