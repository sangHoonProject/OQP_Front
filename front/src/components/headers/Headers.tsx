import styled from "styled-components";
import Color from "../../styles/Color";
import React from "react";

const Headerlogo = styled.h1`
  @font-face {
    font-family: 'EliceDigitalBaeum_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
font-family: 'EliceDigitalBaeum_Bold';
`;

const Loginbutton = styled.a`
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
            height:'80px',
            display:"flex",
            justifyContent:'center',
            zIndex:'700',
            position:'fixed',
            backgroundColor: 'rgba(34, 34, 34, 0.5)',
            backdropFilter:'blur(8px)'
        }}>
            <div style={{
                width:'70%',
                display:'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 5%'
            }}>
            
            <Headerlogo style={{color:Color.white ,
            fontSize : '35px'
            }}>OQP.</Headerlogo>

            <Loginbutton href="#" style={{
                float:'right',
                right:0,
                fontSize:'20px',
                textDecoration: 'none',
                color:Color.white
            }}><img src=""></img>Login</Loginbutton>
            </div>
        </div>
        </>
    )
}

export default Headers