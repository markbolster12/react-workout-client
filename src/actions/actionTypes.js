export const exerciseActions = {
    newExercise: "NEW_EXERCISE",
    selectExercise: "SELECT_EXERCISE",
    editExercise: "EDIT_EXERCISE",
    addExercise: "SAVE_EXERCISE",
    deleteExercise: "DELETE_EXERCISE",
    receiveExercises: "RECEIVE_EXERCISES"
}

export const workoutActions = {
    addWorkout: "ADD_WORKOUT",
    editWorkout: "EDIT_WORKOUT",
    saveWorkout: "SAVE_WORKOUT",
    deleteWorkout: "DELETE_WORKOUT",
    setWorkouts: "SET_WORKOUTS"
}

export const loginActions = {
    services: {
        req_register_user: "REQ_REGISTER_USER",
        resp_register_user: "RESP_REGISTER_USER"
    },
    auth_success: "AUTH_SUCCESS",
    auth_error: "AUTH_ERROR",
    logout: "LOGOUT"
}

export const navigationActions = {
    change_primary_view: "CHANGE_PRIMARY_VIEW"
}

export const performWorkoutActions = {
    addSet: "ADD_SET",
    removeSet: "REMOVE_SET",
    saveWorkout: "SAVE_WORKOUT"

}

export const workoutHistoryActions = {
    loadHistory: "LOAD_HISTORY"
}