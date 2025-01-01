import { useState } from "react"

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
    }
]
    return (
        <>
        <h1>MainContents</h1>
        {data.map((data) => (
            <div>
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
        <div>
                <div>
                    <img src={data.data.imgURl}/>
                </div>
                <div>
                    <p>{data.data.title}</p>
                    <p>{data.data.subTitle}</p>
                    <p>{data.data.writer}</p>
                    <p>{data.data.writer}</p>
                    <button onClick={() => {
                        setChangeLike(changeLike ? false : true)
                    }}>{changeLike?  '좋아요': '싫어요' }</button>
                </div>
            </div>
    )
}