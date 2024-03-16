import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../index"

const AuthContext = createContext(); //creamos el contexto

//exportamos el provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            //valida si el usuario esta autenticado
            console.log(event, session);
            async (event, session) => {
                if(!session?.user){ //si no esta autenticado setea a null
                    setUser(null); 
                    return               
                }

                setUser(session?.user); //si esta autenticado setea el estado con lo que traiga user
            }
        })
        //se ejecuta cuando se desmonta el componente
        return () => {
            authListener.subscription();// suscrito al listener
        }
    }, []);
}