import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

const StyledFormControl = styled(FormControl)`
  width: 100%;
`

const DropdownMenu = ({ selectedVariant, setSelectedVariant }) => {
  const [labelWidth, setLabelWidth] = useState(0)
  const inputLabelRef = useRef(null)

  useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth)
  })

  const handleChange = event => {
    setSelectedVariant(event.target.value)
  }

  return (
    <StyledFormControl variant="outlined">
      <InputLabel ref={inputLabelRef} htmlFor="course-variant-select">
        Minkä kurssin version pisteet, deadlinet ja kolikot haluat nähdä?
      </InputLabel>
      <Select
        value={selectedVariant}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="course-variant"
            id="course-variant-select"
          />
        }
      >
        <MenuItem value={"avoin-syksy-2020-kevat-2021"}>
          Avoin yliopisto, Tietokoneen toiminnan perusteet, syksy 2020 - kevät
          2021
        </MenuItem>
        <MenuItem value={"avoin-kesa-2020"}>
          Avoin yliopisto, Tietokoneen toiminnan perusteet, kesä 2020
        </MenuItem>
        <MenuItem value={"itsenainen"}>Itsenäinen opiskelu, 2019-2020</MenuItem>
      </Select>
    </StyledFormControl>
  )
}

export default withSimpleErrorBoundary(DropdownMenu)
