import { useEffect, useState } from "react";
import Loader from "./Loades";
import Card from "./Card";

const API_KEY = '90ce8ff6827d43aaa9a1f5ead11bb44f'
const API_URL = `https://newsapi.org/v2/everything`

const Home = ({ searchValue }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // Setting loading to true agar jalan loader


        // Fetching data from the API
        const getData = async () => {
            try {
                const data = await fetch(`${API_URL}?q=${searchValue}&from=2024-07-09&sortBy=popularity&apiKey=${API_KEY}`)
                const res = await data.json()
                const news = res.articles.filter((article) => article.title !== '[Removed]' && article.urlToImage !== null)
                return news
            }
            catch (error) {
                console.log(error)
            }
        }
        getData().then(data => setData(data))
            .catch(err => console.log(err)
            ).finally(() => setLoading(false))
    }, [searchValue])

    return (
        <>
            {loading ? <Loader /> : data.length === 0 ? <h1 className="text-4xl text-red-600 text-center font-extrabold">Not Found</h1> :
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 p-6 items-stretch gap-10'>
                    {data.map((article, index) => {
                        return (
                            <Card key={index} article={article} />
                        )
                    })}
                </div>}
        </>
    )

}

export default Home;