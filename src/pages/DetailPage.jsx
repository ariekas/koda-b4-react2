import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function DetailPage() {
    const { id } = useParams()
    const [dataCaracter, setDataCaracter] = useState([])
    async function getData() {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setDataCaracter(response.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center text-center bg-pink-300  rounded-full">
                    <img
                        src={dataCaracter.image}
                        alt={dataCaracter.name}
                        width={200}
                        height={200}
                        className="rounded-lg shadow"
                    />
                    <h1 className="text-2xl font-bold mt-4">{dataCaracter.name}</h1>
                    <p>Status: {dataCaracter.status}</p>
                    <p>Species: {dataCaracter.species}</p>
                    <p>Gender: {dataCaracter.gender}</p>
                    <Link
                        to={"/"}
                        className="bg-white px-5 py-2 rounded-md text-pink-300 font-bold mt-4"
                    >
                        back
                    </Link>
                </div>
            </div>

        </>
    )


}