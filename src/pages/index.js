import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{display: `flex`, height: `100vh`, justifyContent: `center`, alignContent: `center`}}>
      <div style={{ marginBottom: `1.45rem`, width: `100vw`, height: `100vh`}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeuVWEvkX9XxCbZDo6osB6Bpy3T9IJzV1ePWzw_OKMpGU-cg/viewform?embedded=true" width="100%"  height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
