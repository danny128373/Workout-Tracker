const remoteURL = "http://localhost:5002"

export default {
  getAllExercises(muscleId) {
    return fetch(`${remoteURL}/muscleExercises?_expand=muscle&_expand=exercise&muscleId=${muscleId}`).then(data => data.json())
  },
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(data => data.json())
  },
  post(item, collection) {
    return fetch(`${remoteURL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }).then(data => data.json())
  },
  getAll(collection) {
    return fetch(`${remoteURL}/${collection}`).then(data => data.json())
  },
  update(editedWorkout, collection) {
    return fetch(`${remoteURL}/${collection}/${editedWorkout.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedWorkout)
    }).then(data => data.json());
  },
  getAllWorkoutLogsWithUser(id, collection) {
    return fetch(`${remoteURL}/${collection}?_embed=sets&userId=${id}`).then(data => data.json())
  }
}
