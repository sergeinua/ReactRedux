const formReducer = (state = {
	name: '',
	email: ''
}, action) => {
	switch (action.type) {
		case "FORM_SEND":
			state = {
				...state,
				name: action.payload.name,
				email: action.payload.email
			};
			break;
	}

    return state;
};

export default formReducer;