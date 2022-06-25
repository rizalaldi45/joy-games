import axios from "axios";

export const register = async (content) => {
    const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/register',
        data: {
            fullname: content.fullname,
            email: content.email,
            password: content.password
        }
    })

    return data
}

export const login = async (content) => {
    const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        data: {
            email: content.email,
            password: content.password
        }
    })

    return data
}

export const logout = async (token) => {
    const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/logout',
        headers : {
            'Authorization' : token
        }
    })

    return data
}