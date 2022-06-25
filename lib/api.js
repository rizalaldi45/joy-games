import axios from "axios";

export const register = async (content) => {
    const { data } = await axios({
        method: 'POST',
        url: `/api/register`,
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
        url: `/api/login`,
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
        url: `/api/logout`,
        headers : {
            'Authorization' : token
        }
    })

    return data
}