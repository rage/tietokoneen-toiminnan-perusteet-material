import React from "react"
import PartProgress from "./PartProgress"

const CourseProgress = ({ data, appliesForStudyRight }) => {
  return (
    data && (
      <div>
        {Object.entries(data).map(([name, data]) => {
          return (
            <PartProgress
              appliesForStudyRight={false}
              name={name}
              data={data}
            />
          )
        })}
      </div>
    )
  )
}

export default CourseProgress
