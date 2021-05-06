import { createContext, useContext, useState, useReducer } from "react"

const AppContext = createContext()

const initialState = {
    showsignin: false,
    showsignup: false
}
const reducer = (state,action) => {
    switch (action.type){
        case 'showsignin': 
            return {
                showsignin: true
            }
        case 'showsignup':
            return {
                showsignup: true
            }
        default:
            return "Default"
    }
}



const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState)
    
    const [values, setValues] = useState({})

    function updateValues(e){
        console.log(e.target.value)
         setValues({...values,[e.target.name] : e.target.value})
        //  console.log(values)
    
    }
    return (
        <AppContext.Provider value={{updateValues, values, state, dispatch}}>
            { children }
        </AppContext.Provider>
    )
}






const useAppContext = () => useContext(AppContext)

export {
    AppProvider,
    useAppContext
}
