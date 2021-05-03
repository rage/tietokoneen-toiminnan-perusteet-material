import axios from "axios"
import { accessToken } from "./moocfi"

export async function fetchQuizzesProgress() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v2/general/course/22b5b5f8-1a8a-4ea0-be0a-bd65f247abf3/progress",
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data
}

export async function fetchQuizNames() {
  const response = await axios.get(
    "https://quizzes.mooc.fi/api/v1/quizzes/22b5b5f8-1a8a-4ea0-be0a-bd65f247abf3/titles/fi_FI",
  )
  return response.data
}
