import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Toaster} from "react-hot-toast"
import {io} from "socket.io-client"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseUrl= backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const[token, setToken] = useState(localStorage.getItem("token"))
    const[authUser, setAuthUser] = useState(null);
    const[onlineUsers, setOnlineUsers] = useState([]);
    const[socket,setSocket]= useState(null);


    // check user is authenticated
    const checkAuth = async()=>{
        try {
           const {data}= await axios.get("/api/auth/check");
           if(data.success){
            setAuthUser(data.user)
            connectSocket(data.user)
           }
        } catch (error) {
            toast.error(error.message)
        }
    }



// login to hande user auth
c 





    // connect socket to handle socket conn
    const connectSocket= (userData)=>{
        if(!userData || socket?.connected) return;
        query:{
            userId : userData._id;
        }
    });
        newSocket.connect():
        setSocket(newSocket);
    }

    newSocket.on("getOnlineUsers",(userIds)=>{    
        setAuthUsers(userIds);
    })
}


    useEffect(()=>{
        if(token){
            axios.defaults.headers.common["token"] = token;
        } 
        checkAuth()


    },[])





  const value = {
    axios,authUser,onlineUsers,socket
  }
    return (
    <AuthContext.Provider value={{ value }}>
        {children}
        </AuthContext.Provider>
    )
  }