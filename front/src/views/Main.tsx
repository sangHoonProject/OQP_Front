import MainContents from "../components/contents/MainContents"
import Footer from "../components/footers/Footer"
import Headers from "../components/headers/Headers"
import MainDiv from "../components/mainDiv/MainDiv"
import Color from "../styles/Color"

function Main() {
  return (
    <div>
      <Headers />
      <MainDiv />
      <MainContents />
      <Footer />
      <button onClick={() => {
        window.location.href = './SignIn'
      }}></button>
      <h1 style={{color:Color.red}}>메인페이지</h1>
      {/* <nav style={{color:}}>sdaf</nav> */}
    </div>
  )
}

export default Main
