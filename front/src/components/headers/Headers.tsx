import styled from "styled-components";
import Color from "../../styles/Color";
// import React from "react"; React 16 이하일 때 이 코드 사용!
import { Link } from "react-router-dom";


const Headerlogo = styled.a`
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
            
            <Headerlogo href="#" style={{color:Color.white ,
            fontSize : '35px',
            textDecoration:'none'
            }}>OQP.</Headerlogo>

            
            <div style={{
                float:'right',
                display:'flex',
                justifyContent:'space-between',
                width:'130px'
            }}>
            <Loginbutton href="#" style={{
                right:0,
                textDecoration:'none'
            }}> <Link style={{
                fontSize:'20px',
                textDecoration: 'none',
                color:Color.white
            }} to="/SignUp">Sign Up</Link></Loginbutton>

            <img src="https://www.kg-mobility.com/images/cm/icons/24/icon-menu-light.svg" alt="line" />
            </div>
            </div>
        </div>
        </>
    )
}

export default Headers