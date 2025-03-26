import {createContext, useContext} from "react";
import {useState} from "react";
const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({ children }) => {
    const [user, _setUser] = useState(localStorage.getItem("user"));
    const [token, _setToken] = useState(localStorage.getItem("login_token"));

    function setUser(user){
        _setUser(user);
        console.log(user);
        if(user){
            localStorage.setItem("user" , user);
        }
        else{
            localStorage.removeItem("user");
        }
    }

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem("login_token" , token);
        }
        else{
            localStorage.removeItem("login_token"   );
        }
    }
    // async function handleLogout(){
    //     try{
    //         const response = await Logout(token);
    //         if(response.status === 200){
    //             localStorage.removeItem('login_token')
    //             console.log('user Loged out')
    //             window.location.href = '/login/student'
    //         }
    //     }

    //     catch (e){
    //         toast(e.message)
    //     }

    // }
//can also store user in localstorage
    return (
        <stateContext.Provider value={{
            user,
            token,
            setToken,
            setUser,
            // handleLogout,
        }}>
            {children}
        </stateContext.Provider>
    )
}
export function useStateContext(){
    return useContext(stateContext)
}