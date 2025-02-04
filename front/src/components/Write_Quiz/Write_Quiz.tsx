import { Link } from 'react-router-dom';
import Color from '../../styles/Color';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Auth from '../../api/Auth';
import '../../styles/Fonts.css';
import styled from 'styled-components';
import Footer from "../footers/Footer"
import Headers from "../headers/Headers"

const Boxlist = styled.div`
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
// 퀴즈 항목 컨텐츠 박스 텍스트 폰트

const ContentsArea = styled.div`
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
font-family: 'SUITE-Regular';
font-weight: bold;
color: #000000;
cursor : pointer;
backgroundColor: isHovered ? '#ddd' : '#333' // Hover 상태에 따른 배경색 변경
`;
// 화면 중앙 콘텐츠 박스 폰트

const ShareQuizbtn = styled.button`
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
font-family: 'SUITE-Regular';
font-weight: bold;
color: #000000;
cursor : pointer;
backgroundColor: isHovered ? '#ddd' : '#333' // Hover 상태에 따른 배경색 변경
`;
// 퀴즈 제작 창 퀴즈 제출버튼

function Write_Quiz(){
    const data = [
        {
            title: '첫번째 퀴즈',
            subTitle: 'test1',
            imgURl: 'https://as1.ftcdn.net/jpg/03/45/97/36/1000_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg',
            writer: '김민서',
            like: false,
        }
        // 메인페이지 퀴즈 항목 테스트용(간략히)
        ,
    ]

    return(
        <>

        <Headers />
        <div style={{
            backgroundColor:Color.firstcolor,
            width:'100%'
        }}>
            <div
            style={{
                height:'700px',
                display:'flex',
                justifyContent:'center',
                paddingTop:'100px'
            }}>
                <ContentsArea style={{
                    width:'1200px',
                    padding:'60px',
                    fontSize:'2rem',
                    textAlign:'center',
                    border:'0.5px solid gray',
                    borderRadius:'30px',
                    color:Color.black,
                    backgroundColor:Color.white,
                    zIndex:0,
                    lineHeight:'70px'
                }}>
                    오늘도 방문해 주셔서 고마워요!
                    <br />나만의 퀴즈를 자유롭게 작성해보세요! <br />
                    <input type="name"
                    placeholder="제목"
                        style={{
                        textAlign:'center',
                        width: '100%',
                        padding: '10px',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        outline: 'none',
                        border:'0.5px solid gray',
                        fontSize:'25px',
                        backgroundColor:Color.white,
                        color:'#270082',
                    }}
                        />

                    <input type="explanation"
                    placeholder="퀴즈 설명"
                        style={{
                        textAlign:'center',
                        width: '100%',
                        height:'250px',
                        padding: '10px',
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        outline: 'none',
                        border:'0.5px solid gray',
                        fontSize:'25px',
                        backgroundColor:Color.white,
                        color:'#270082',
                    }}
                        />
                        
                    <ShareQuizbtn style={{
                    width:'350px',
                    lineHeight:'100px',
                    fontSize:'50px',
                    border:'none',
                    borderRadius:'30px',
                    textAlign:'center'
            }}>퀴즈 작성 완료</ShareQuizbtn>
                </ContentsArea>
            </div>

            <p style={{
                fontSize:'20px',
                color:Color.white,
                textAlign:'center',
                lineHeight:'100px'
            }}>다른 사용자가 만든 퀴즈도 보고 가세요!</p>
            <div style={{
                bottom:0
            }}>
            {data.map((data) => (
            <div style={{
                display: 'flex',
                padding:'30px'
            }}>
                {Array.from({ length: 6 }).map((_, idx) => (
            <Contents key={idx} data={data} />
        ))}
            </div>
        ))}
            </div>
        </div>
        <Footer />
        </>
    );
}

interface contentDataTypes {
    data: {title: string,
    subTitle: string,
    imgURl: string,
    writer: string,
    like: boolean
    }
}
function Contents(data: contentDataTypes) {
    const [changeLike, setChangeLike] = useState(data.data.like)
    return (
        <Boxlist style={{
            overflow:'hidden',
            width: '200px',
            flex:1,
            justifyContent:"center",
            zIndex:0,
            margin:'5px',
            backgroundColor:'#F5F7F8',
            textAlign:'center',
            borderRadius : '20px',
            fontFamily: 'NoonnuBasicGothicRegular',
            paddingBottom:'5px',
            boxShadow: '0px 0px 3px #444'
        }}>
                <div>
                    <img src={data.data.imgURl} style={{
                        width: '100%'
                    }}/>
                </div>
                <div>
                    <p>{data.data.title}</p>
                    <p>{data.data.subTitle}</p>
                    <p>{data.data.writer}</p>
                    <p>{data.data.writer}</p>
                    <button style={{
                        fontFamily: 'NoonnuBasicGothicRegular',
                        border:'none',
                        backgroundColor:'red',
                        borderRadius:'5px',
                        width:'70px',
                        height:'30px',
                        fontSize:'20px',
                        color:'white'
                    }} onClick={() => {
                        setChangeLike(changeLike ? false : true)
                    }}>{changeLike?  '좋아요': '싫어요' }</button>
                </div>
        </Boxlist>
    )
}

export default Write_Quiz