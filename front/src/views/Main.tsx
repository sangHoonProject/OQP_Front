import MainContents from "../components/contents/MainContents"
import Footer from "../components/footers/Footer"
import Headers from "../components/headers/Headers"
import Color from "../styles/Color"

function Main() {
  return (
    <div style={{backgroundColor:Color.firstcolor
    }}>
      <Headers />
      <MainContents />
      <Footer />
    </div>
  )
}

export default Main
