import React, {useState, useEffect} from "react"
import { Router } from "@reach/router"

import Proto from "../components/Proto"

const key = `AIzaSyBVnim0e-dWFqDyKN0FQrUzcV2ZZg1pFc4`;
const link_old = `1Z--Fc487YWBpSuJRt2Nq-7wx14XAaZFWfFUbByBoSVY`;
const link = `1ix43kxRXfO4YdvPTesdgPc1NVZLi0vnQgvBRvK74Kb4`;
const API = `https://sheets.googleapis.com/v4/spreadsheets/${link}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${key}`;





const App = () => {



  return (
      <Router>
        <Proto path="/proto/:keyword" component={Proto} />
      </Router>
  )
}
export default App