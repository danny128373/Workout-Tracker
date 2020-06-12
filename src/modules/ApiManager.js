const remoteURL = "http://localhost:5002"

export default {
  getAllExercises(muscleId) {
    return fetch(`${remoteURL}/muscleExercises?_expand=muscle&_expand=exercise&muscleId=${muscleId}`).then(e => e.json())
  },
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  }
}
