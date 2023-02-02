
const initalState = {
    loggedInUser: {
        name: 'Jorji',
        balance: 300
    }
}

export function watcherReducer(state = initalState, action) {

    switch (action.type) {
        // case 'SPEND_BALANCE':
        //     const { loggedInUser } = state
        //     return {
        //         ...state,
        //         loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
        //     }

        default:
            return state;
    }

}