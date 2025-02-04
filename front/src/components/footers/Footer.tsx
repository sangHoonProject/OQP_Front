import styled from "styled-components";
import Color from "../../styles/Color";
import { Link } from "react-router-dom";

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

const Footeremoji = styled.div`
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

const Footerlogo = styled.p`
  @font-face {
    font-family: 'EliceDigitalBaeum_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
font-family: 'EliceDigitalBaeum_Bold';
`;
// OQP 글씨체

function Footer() {
    return (
        <>
        {/* 푸터 전체 코드 */}
        <Footertext style={{
            position:'relative',
            marginBottom:'-30px',
            bottom:0,
            width:'100%',
            height:'150px',
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Color.darkgray,
            paddingTop:'50px',
            zIndex:900
        }}>
            <p style={{
                color:Color.white,
                fontSize:'20px',
                marginBottom:'20px'
            }}>Thank you very much. :)</p>

            {/* 푸터 상단 */}
            <div style={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                color:Color.white,
                
            }}>
                {/* 푸터 상단 콘텐츠 */}
                <div style={{
                    left:0,
                    display:'flex',
                    width:'80%',
                    borderTop:'0.5px solid gray'
                }}>
                    {/* 푸터 상단 왼쪽 묶음 */}
                    <div>
                    <a style={{
                        marginRight:'10px',
                        flex:1,
                        lineHeight:'70px',
                        alignItems:'center',
                        color:Color.white,
                        textDecoration:'none',
                        alignSelf:'center',
                        borderRight:'0.5px solid gray',
                        paddingRight:'10px',
                        height:'100px'
                    }} href="https://github.com/lwer210">
                        <img style={{
                        width:'20px',
                        height:'20px',
                        borderRadius:'110px',
                        lineHeight:'400px',
                        marginRight:'10px'
                        }} src="data:image/png;base64,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" alt="playstore" />
                    백엔드 개발(이상훈)</a>

                    <a style={{
                        marginRight:'10px',
                        flex:1,
                        lineHeight:'70px',
                        alignItems:'center',
                        color:Color.white,
                        textDecoration:'none',
                        alignSelf:'center',
                        borderRight:'0.5px solid gray',
                        paddingRight:'10px',
                        height:'100px'
                    }} href="https://github.com/kingkaminseo">
                        <img style={{
                        width:'20px',
                        height:'20px',
                        borderRadius:'110px',
                        lineHeight:'400px',
                        marginRight:'10px'
                        }} src="data:image/png;base64,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" alt="playstore" />
                    프론트 엔드 개발(김민서)</a>

                    <a style={{
                        marginRight:'0px',
                        flex:1,
                        lineHeight:'70px',
                        alignItems:'center',
                        color:Color.white,
                        textDecoration:'none',
                        alignSelf:'center',
                        height:'100px'
                    }} href="https://github.com/Rambopig06">
                        <img style={{
                        width:'20px',
                        height:'20px',
                        borderRadius:'110px',
                        lineHeight:'400px',
                        marginRight:'10px'
                        }} src="data:image/png;base64,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" alt="playstore" />
                    프론트 엔드 개발(김대운)</a>
                    </div>
            </div><br />
            </div>
            
        </Footertext>


                        {/* 푸터 하단 시작 */}
        <div
        style={{
            width:'100%',
            height:'480px',
            display:'flex',
            backgroundColor:Color.darkgray,
            marginBottom:'-40px',
            alignItems:'center',
            justifyContent:'center',
            zIndex:900,
            position:'absolute'
        }}>
            
            <Footeremoji
            style={{
                width:'80%',
                borderTop:'0.5px solid gray',
                height:'100px',
                display:'flex',
                justifyContent:'space-between',
                
            }}>
                <h3 style={{color:Color.white,
                    lineHeight:'100px'
                }}>Copyright OQP ⓒ 2025 All right reserved.</h3>
                {/* 푸터 하단 왼쪽 요소 */}

                {/* 푸터 하단 오른쪽 요소 시작 */}
                <div style={{float:'right',
                    display:"flex"
                }}>

                    <a style={{
                        marginRight:'10px',
                        flex:1,
                        lineHeight:'100px',
                        alignItems:'center'
                    }} href="#">
                        <img style={{
                        aspectRatio:'auto 100/40'
                        }} src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/google-play-badge.svg" alt="playstore" />
                    </a>

                    <a style={{
                        marginRight:'10px',
                        flex:1,
                        lineHeight:'100px',
                        alignItems:'center'
                    }} href="#">
                        <img style={{
                        aspectRatio:'auto 100/40'
                        }} src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/app-store-badge.svg" alt="playstore" />
                    </a>

                    <a style={{
                        marginRight:'10px',
                        flex:1,
                        lineHeight:'100px',
                        alignItems:'center'
                    }} href="#">
                        <img style={{
                        width:'120px',
                        }} src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/mac-app-store-badge.svg" alt="playstore" />
                    </a>
                    
                
                
                <Footerlogo style={{color:Color.white ,
                fontSize : '35px',
                textDecoration:'none',
                lineHeight:'80px',
                marginLeft:'30px'
                }}><Link to="/main" style={{
                    textDecoration:'none',
                    color:Color.white
                }}>O Q P.</Link></Footerlogo>
            </div>
            
            </Footeremoji>
            {/* 푸터 오른쪽 요소 끝 */}
        </div>
        </>
    )
}

export default Footer