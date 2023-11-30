import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

const Welcome = () => {
    const user = Cookies.get().user

    useEffect(() => {
        console.log(JSON.parse(user).id)
    }, [])
    return (
        <div>Welcome</div>
    )
}

export default Welcome