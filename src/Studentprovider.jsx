import { createContext, useState } from "react"

const StudentContext = createContext()

function Studentprovider({ children }) {

    const [studentArr, setStudentArr] = useState([
        { id: 1, name: "Kavitha" },
        { id: 2, name: "Priya" },
        { id: 3, name: "Manjula" },
        { id: 4, name: "Archana" },
        { id: 5, name: "Pradeepa" }
    ])

    const [favouriteArr, setFavouriteArr] = useState([])

    return (
        <StudentContext.Provider value={{
            studentArr,
            setStudentArr,
            favouriteArr,
            setFavouriteArr
        }}>
            {children}
        </StudentContext.Provider>
    )
}

export default Studentprovider
export { StudentContext }