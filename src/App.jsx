import { Routes, Route, Link, Navigate } from "react-router-dom"
import Studentprovider from "./Studentprovider"
import Studentname from "./Studentname"
import Favouritestudent from "./Favouritestudent"

function App() {
    return (
        <Studentprovider>
            <div className="bg-black p-10">
                <div className="bg-blue-200 border rounded-md p-5">

                    

                    <div className="w-full max-w-md mx-auto px-4">

    <div className="flex justify-between font-bold mb-3">
        <Link to="/students" className="underline">
            Student Name
        </Link>

        <Link to="/favourites" className="underline">
            Favourite Student
        </Link>
    </div>

</div>

                    <Routes>
                        <Route path="/" element={<Navigate to="/students" replace />} />
                        <Route path="/students" element={<Studentname />} />
                        <Route path="/favourites" element={<Favouritestudent />} />
                    </Routes>

                </div>
            </div>
        </Studentprovider>
    )
}

export default App