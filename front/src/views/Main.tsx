import MainContents from "../components/contents/MainContents"
import Footer from "../components/footers/Footer"
import Headers from "../components/headers/Headers"
import Color from "../styles/Color"

function Main() {
  return (
    <div style={{backgroundColor:Color.sectioncolor}}>
      <Headers />
      <MainContents />
      <Footer />
      <button onClick={() => {
        window.location.href = './SignIn'
      }}></button>
      {/* <nav style={{color:}}>sdaf</nav> */}
    </div>
  )
}

export default Main
