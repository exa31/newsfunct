export default function Search({ setSearchValue }) {

    // untuk menghandle search dan mengirimkan value ke parent component
    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target[0].value === '') {
            e.target[0].value = ''
            return setSearchValue('marvel')
        }
        setSearchValue(e.target[0].value)
        e.target[0].value = ''
    }

    return (
        <div className="mx-auto p-4 sticky top-0 backdrop-blur-xl">
            <div className="flex flex-colom justify-center items-center">
                <div className="w-1/2">
                    <form action="" className="flex border-2 rounded-lg" onSubmit={handleSearch}>
                        <input type="text" className="w-full focus:outline-none   border-gray-300 rounded-lg p-2" placeholder="Search" />
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-e-lg hover:bg-blue-300 transition delay-100">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )

}