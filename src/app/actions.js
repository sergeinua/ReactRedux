export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    };
}

export function subtractNumber(number) {
    return {
        type: "SUBTRACT",
        payload: number
    };
}

export function setName(name) {
    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            },2000)
        })
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
}

export function setFieldVal(value) {
    return {
        type: "FIELD_UPDATE_VAL",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 3000)
        })
    };
}

export function sendForm(name, email) {
    return {
        type: "FORM_SEND",
        payload: {
            name: name,
            email: email
        }
    }
}