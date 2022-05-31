import Testimonials from "../Testimonials/Testimonials"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import GetQuote from "../GetQuote/GetQuote"

const Home = () => {
  const styles = {
    homeContainer: css`
      max-width: 60%;
      margin: 40px auto;
      padding: 20px;
    `,
  }
  return (
    <div css={styles.homeContainer}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos. Sint
        odio neque dolorem magnam maxime, quia, veritatis error molestiae
        voluptates deserunt sed esse saepe labore inventore nostrum blanditiis
        deleniti!
      </p>

      <div>
        <Testimonials />
        <GetQuote />
      </div>
    </div>
  )
}

export default Home
