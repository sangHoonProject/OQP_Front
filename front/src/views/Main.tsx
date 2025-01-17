import Color from "../styles/Color"

function Main() {
  return (
    <div style={{display:"flex"}}>
      <button onClick={() => {
        window.location.href = './SignIn'
      }}></button>
      <h1 style={{color:Color.red}}>메인페이지</h1>
      {/* <nav style={{color:}}></nav> */}
    </div>
  )
}

export default Main
