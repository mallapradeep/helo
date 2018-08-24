const initialState = {
    username: '',
    userId: 0,
    profile_pic:''
}

const  UPDATE_USERNAME= "UPDATE_USERNAME";
const UPDATE_USER_ID = "UPDATE_USER_ID";
const  UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";


export default function reducer(state = initialState, action ) {
    switch(action.type) {
        case UPDATE_USERNAME:
        return Object.assign({}, state, {username: action.payload})
        case UPDATE_PROFILE_PIC:
        return Object.assign({}, state, {profile_pic: action.payload})
        case UPDATE_USER_ID:
        return Object.assign({}, state, {userId: action.payload})
        default: 
        return state;
    }
}

//action builders
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updateUserId(userId) {
    return {
        type: UPDATE_USER_ID,
        payload: userId
    }
}
export function updateProfilePic(profile_pic) {
    return {
        type: UPDATE_PROFILE_PIC,
        payload: profile_pic
    }
}