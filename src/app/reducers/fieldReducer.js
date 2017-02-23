const fieldReducer = (state = { 
	field_val: '',
	lastValues: []
}, action) => {
	switch (action.type) {
		case "FIELD_UPDATE_VAL_FULFILLED":
			state ={
				...state,
				field_val: action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}

	return state;
};

export default fieldReducer;