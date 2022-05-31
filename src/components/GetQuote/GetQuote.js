import { useState } from "react"
import axios from "axios"

const GetQuote = () => {
  const [quote, setQuote] = useState("")
  const Fetch = () => {
    axios
      .get("https://api.quotable.io/random")

      .then((res) => {
        setQuote(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <button onClick={Fetch}>Get Your Daily Quote</button>
      <p>{quote}</p>
    </div>
  )
}

export default GetQuote
