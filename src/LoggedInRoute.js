import React ,{ useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from './AuthService'

const LoggedInRoute = ({component: Component, ...rest}) =>{
    //childrenってこと？AuthContextのvalueをとってくる
    const user = useContext(AuthContext)


return(
    <Route
    {...rest}//pathやexactを分解したものを渡す。
    render={props =>(
        user ? (
            <Component {...props} />
        ) : (
            <Redirect to={'/login'} />
        )
    )}
    />
)
}

export default LoggedInRoute