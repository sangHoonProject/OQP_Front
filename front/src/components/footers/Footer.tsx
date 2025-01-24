import styled from "styled-components";
import Color from "../../styles/Color"

const Footertext = styled.p`
  @font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  font-family: 'NoonnuBasicGothicRegular';
  font-size: 15px;
  color: #333;
`;

function Footer() {
    return (
        <>
        <Footertext style={{
            position:'relative',
            marginBottom:'-30px',
            bottom:0,
            width:'100%',
            height:'200px',
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Color.footerbg,
            paddingTop:'100px',
            zIndex:600
        }}>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
            <p>이상훈</p>
            <p>김민서</p>
            <p>김대운</p>
            <p>이 만든</p>
            <p>역작</p>
            </div><br />
            <h3>"Copyright OQP ⓒ 2025 All right reserved"</h3>
        </Footertext>
        </>
    )
}

export default Footer