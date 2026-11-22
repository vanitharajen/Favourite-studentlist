import { useContext } from "react"
import { StudentContext } from "./Studentprovider"

function Studentname() {
    const { studentArr, favouriteArr, setFavouriteArr } =
        useContext(StudentContext)

    function addStudent(student) {
    setFavouriteArr((prev) => [...prev, student])
}

    return (
        <div className="w-full max-w-md mx-auto px-4">

            

            {studentArr.map((item) => {

                const isAdded = favouriteArr.some(
                    (fav) => fav.id === item.id
                )
                return(


                <div key={item.id} className="flex justify-between items-center mb-3">
                    <h2>{item.id}.{item.name}</h2>

                    <button
                        onClick={() => addStudent(item)} disabled={isAdded}
                        className="bg-black text-white rounded-md px-3 py-1 cursor-pointer
                        disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed">
                        {isAdded ? "Added" : "Add"}
                    </button>
                </div>
            )})}
        </div>
    )
}

export default Studentname