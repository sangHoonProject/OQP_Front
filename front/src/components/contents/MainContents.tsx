import { useState } from "react"
import styled from "styled-components";

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


function MainContents() {
    const data = [
    {
        title: '자동차퀴즈',
        subTitle: 'test1',
        imgURl: 'https://pimg.mk.co.kr/news/cms/202310/20/20231020_01110305000006_L00.jpg',
        writer: '김민서',
        like: false,
    },
    {
        title: '자동차퀴즈',
        subTitle: 'test1',
        imgURl: 'https://pimg.mk.co.kr/news/cms/202310/20/20231020_01110305000006_L00.jpg',
        writer: '김민서',
        like: false,
    },
]
    return (
        <>
        {data.map((data) => (
            <div style={{
                display: 'flex',
                padding:'30px'
            }}>
                <Contents data={data}/>
                <Contents data={data}/>
                <Contents data={data}/>
                <Contents data={data}/>
                <Contents data={data}/>
                <Contents data={data}/>
            </div>
        ))}
        </>
    )
}

export default MainContents

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
            zIndex:700,
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
