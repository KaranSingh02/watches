const myState = {
    users: [],
    isLoggedIn: false,
    current_user: {}
};

export const userReducer =  (state = myState, action) => {
    switch (action.type) {

        case 'REGISTER':
            alert("Registered Successfully....");
            window.location.href = ('/login')
            return state;

        case 'USER_LOGIN':
            return Object.assign(myState,{isLoggedIn: true, current_user: action.payload.user_data});    

        case 'LOGGEDIN':
            return Object.assign(myState,{isLoggedIn: true});
            
        case 'GOTALLUSERS':
            return Object.assign(myState,{users: action.payload.data});

        // case 'CHANGEPASS':
        //     localStorage.clear('jwtToken');
        //     window.location.href = '/login';
        //     return state;

        default:
            return state;
    }   
};

