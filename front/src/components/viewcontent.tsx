import { useEffect } from "react"

function ViewContent() {
    var pagenumber = 0

    interface Json {

    }

    async function view() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/content/all/?page=${pagenumber}`)
        const data = await response.json()
        if (response.ok) {
            console.log(data)
        }
      } catch(error) {
        console.log(error)
      }
    }

    useEffect(() => {
        view()
    },[])
  return (
    <div>
        <h1>view</h1>
    </div>
  );
}

export default ViewContent;
