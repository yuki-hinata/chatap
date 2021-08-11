import React from 'react'

const Item = ({content, user}) => {
    return(  
    <li>{user}:{content}</li>
    )
}

export default Item