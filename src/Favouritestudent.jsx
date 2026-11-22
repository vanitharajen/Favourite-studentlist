import { useContext } from "react"
import { StudentContext } from "./Studentprovider"

function Favouritestudent() {
    const {favouriteArr, setFavouriteArr } =
        useContext(StudentContext)

    function removeStudent(id) {
        setFavouriteArr(
            favouriteArr.filter((item) => item.id !== id)
        )
    }

    return (
        <div className="w-full max-w-md mx-auto px-4">

           

            {favouriteArr.map((item,index) => (


                <div key={item.id} className="flex justify-between items-center mb-3">
                    <h2>{index+1}.{item.name}</h2>

                    <button
                       onClick={() => removeStudent(item.id)}
                        className="bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer">
                       Remove
                    </button>
                </div>
            ))}
        </div>
    )
}


export default Favouritestudent