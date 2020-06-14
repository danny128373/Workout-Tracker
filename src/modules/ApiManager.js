const remoteURL = "http://localhost:5002"

export default {
  getAllExercises(muscleId) {
    return fetch(`${remoteURL}/muscleExercises?_expand=muscle&_expand=exercise&muscleId=${muscleId}`).then(data => data.json())
  },
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(data => data.json())
  },
  post(set, collection) {
    return fetch(`${remoteURL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(set)
    }).then(data => data.json())
  },
  getAll(collection) {
    return fetch(`${remoteURL}/${collection}`).then(data => data.json())
  }
}
