import * as React from "react"
import Seo from "../components/Seo/seo"
import Layout from "../layout";
import Button from "../components/UI/Button"
import {navigate} from "gatsby"

const PageNotFound = () => (
  <Layout>
      <Seo title="404: Not found" />
      <div className={"flexbox-center page-404"}>
          <h1>404</h1>
          <p>Page not found</p>
          <Button text={'Back home'} onClick={() => navigate('/')}/>
      </div>
  </Layout>
)

export default PageNotFound
