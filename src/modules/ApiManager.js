const remoteURL = "http://localhost:5002"

export default {
  getAllExercises(muscleId) {
    return fetch(`${remoteURL}/muscleExercises?_expand=muscle&_expand=exercise&muscleId=${muscleId}`).then(data => data.json())
  },
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(data => data.json())
  },
  get(collection, id) {
    return fetch(`${remoteURL}/${collection}/${id}`).then(data => data.json())
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
  update(editedProfile, collection) {
    return fetch(`${remoteURL}/${collection}/${editedProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProfile)
    }).then(data => data.json());
  },
  getAllWorkoutLogsWithUser(id, collection) {
    return fetch(`${remoteURL}/${collection}?_embed=sets&userId=${id}`).then(data => data.json())
  },
  searchLogs(userInput, id) {
    return fetch(`${remoteURL}/sets?_expand=workoutLog&name_like=${userInput}&userId=${id}`)
      .then(e => e.json())
  },
  delete(collection, id) {
    return fetch(`${remoteURL}/${collection}/${id}`, {
      method: "DELETE"
    }).then(e => e.json())
  },
  getRoutineExercises(routineId) {
    return fetch(`${remoteURL}/routineExercises?_expand=muscle&_expand=exercise&routineId=${routineId}`).then(data => data.json())
  },
  getAllRoutinesWithUser(collection, userId) {
    return fetch(`${remoteURL}/${collection}?_expand=user&_expand=routine&_expand=exercise&userId=${userId}`).then(data => data.json())
  },
  getAllRoutines(collection, userId) {
    return fetch(`${remoteURL}/${collection}?userId=${userId}`).then(data => data.json())
  }
}