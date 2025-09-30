export function Search(props) {
    return (
        <>
            <div className="bg-pink-300 flex justify-center text-white py-5 w-full lg:max-w-3xl rounded-b-4xl m-auto mb-5">
                <div className="flex-col text-center space-y-5">
                <h1 className="text-3xl font-semibold">Karakter Morty</h1>
                <form id="searchForm" className="flex md:flex-row flex-col md:items-center gap-7"  onSubmit={props.submit}>
                    <input type="text" name="search" id="searchInput" placeholder="Masukan nama..." className="text-lg font-bold border border-white p-1 rounded-lg" onChange={props.event}/>
                    <button type="submit" className="border border-white py-1 px-5 rounded-lg hover:bg-white hover:text-pink-300">Search</button>
                </form>
                </div>
            </div>
        </>
    )
}