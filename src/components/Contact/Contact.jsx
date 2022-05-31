import Testimonials from "../Testimonials/Testimonials"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import GetQuote from "../GetQuote/GetQuote"

const Contact = () => {
  const styles = {
    contactContainer: css`
      max-width: 60%;
      margin: 40px auto;
      padding: 20px;
    `,
  }

  return (
    <div css={styles.contactContainer}>
      <h1>Contact</h1>
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

export default Contact
