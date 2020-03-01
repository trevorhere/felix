import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, {keyframes} from 'styled-components'

const NotFoundPage = () => (
  <div>
    <SEO title="Felix" />
 
        <Loader>Loading<Blink>...</Blink> </Loader>
    </div>
)

export default NotFoundPage


const flash = keyframes`
0%{     color: #000;    }
49%{    color: #000; }
60%{    color: transparent; }
99%{    color:transparent;  }
100%{   color: #000;    }
`

const Loader = styled.div`
font-family:  Roboto Mono;
text-align: center;
margin-top: 25%;
display: flex;
justify-content: center;
`
const Blink = styled.div`
font-family: Roboto Mono;
animation:${flash} 1.2s infinite;
`