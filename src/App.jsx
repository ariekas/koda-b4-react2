import { useEffect, useState } from "react"
import { Search } from "./components/Search"
import axios from "axios"

function App() {
  const [dataCaracter, setDataCaracter] = useState([])
  const [input , setInput ] = useState("")
  const [filterData, setFilterData] = useState([])

  async function getData() {
   try {
    const response = await axios.get("https://rickandmortyapi.com/api/character")
    setDataCaracter(response.data.results)
    setFilterData(response.data.results)
   } catch (error) {
    console.error("Error fetching data:", error)
   }
  }

  useEffect(()=> {
    getData()
  }, [])

 function SearchHandel(e) {
  e.preventDefault()
  const result = dataCaracter.filter(items =>
    items.name.toLowerCase().includes(input.toLowerCase())
  )
  setFilterData(result)
 }

  return (
    <div>
    <Search 
      event={(e) => setInput(e.target.value)} 
      submit={SearchHandel}
    />
    {filterData.length === 0 ? (
      <p className="text-center text-gray-500 text-lg mt-10">
        Tidak ada data yang ditemukan
      </p>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 border-3 border-pink-300 m-5 p-5 rounded-lg">
        {filterData.map(items => (
          <div key={items.id} className="flex flex-col items-center">
            <img src={items.image} alt={items.name} width={150} height={150}/>
            <p>{items.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  
  )
}

export default App
