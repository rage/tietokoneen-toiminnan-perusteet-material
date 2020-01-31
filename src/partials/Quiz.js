import React from "react"
import styled from "styled-components"
import LoginStateContext from "../contexes/LoginStateContext"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { Paper } from "@material-ui/core"

const StyledPaper = styled(Paper)`
  overflow: hidden;
  margin: 2rem 0 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 40px -12px !important;
  border-radius: 1rem !important;
`

class QuizPartial extends React.Component {
  static contextType = LoginStateContext

  render() {
    return (
      <div>
        <b>
          Tässä kohtaa oleva kysely on huoltokatkolla. Kysely palaa katkolta
          perjantaina 31.1.2020.
        </b>
      </div>
    )
  }
}

export default withSimpleErrorBoundary(QuizPartial)
