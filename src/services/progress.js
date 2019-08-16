import { getCachedUserDetails } from "./moocfi"
import { zip } from "../util/arrays"
import { fetchQuizzesProgress } from "./quizzes"

export async function fetchProgress() {
  // await fetchQuizzesProgress()
  const serviceIdentifiers = ["Kyselyt"]
  const progressesCollection = await Promise.all([fetchQuizzesProgress()])
  const userDetails = await getCachedUserDetails()
  const currentCourseVariant = userDetails?.extra_fields?.course_variant
  const progressByGroup = {}

  zip(serviceIdentifiers, progressesCollection).forEach(
    ([identifier, progresses]) => {
      console.log(JSON.stringify(progresses))
      progresses.forEach(progressEntry => {
        if (!progressByGroup[progressEntry.group]) {
          progressByGroup[progressEntry.group] = {}
        }
        progressByGroup[progressEntry.group][identifier] = progressEntry
      })
    },
  )
  const toBeDeleted = []

  toBeDeleted.forEach(o => {
    delete progressByGroup[o]
  })
  return progressByGroup
}
