import React from "react"
import styled from "styled-components"
import LoginStateContext from "../contexes/LoginStateContext"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { Paper, Card } from "@material-ui/core"

const StyledCard = styled(Card)`
  padding: 5rem;
  margin-bottom: 2rem;
`

class QuizPartial extends React.Component {
  static contextType = LoginStateContext

  render() {
    return (
      <StyledCard>
        <b>
          Tässä kohtaa oleva kurssin tehtävä on huoltokatkolla. Tehävä palaa
          katkolta perjantaina 31.1.2020.
        </b>
      </StyledCard>
    )
  }
}

export default withSimpleErrorBoundary(QuizPartial)
