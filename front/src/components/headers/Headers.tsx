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
            height:'60px',
            backgroundColor:Color.headerbackground,
            display:"flex",
            justifyContent:'center',
            zIndex:'100'
        }}>
            <div style={{
                width:'70%',
                display:'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 5%'
            }}>
            
            <Headerlogo style={{color:Color.black ,
            fontSize : '35px'
            }}>OQP.</Headerlogo>

            <a href="#" style={{
                float:'right',
                right:0,

            }}><img src=""></img></a>
            </div>
        </div>
        </>
    )
}

export default Headers