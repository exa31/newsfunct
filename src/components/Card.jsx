export default function Card({ article }) {

    return (
        <div className="rounded-md ">
            <img className='object-fill max-w-full h-80 mx-auto' src={article.urlToImage} alt={article.title} />
            <h3 className='text-3xl'>{article.title}</h3>
            <div>
                <small className="card-text"><span>{article.author === null ? 'anonymous' : article.author}</span> | {article.publishedAt}</small>
            </div>
            <p className="my-3 text-lg">{article.description}</p>
            <a className="bg-blue-500 text-white px-4 py-2 my-8 hover:bg-blue-300 transition delay-100" href={article.url} target='_blank' rel='noreferrer'>Read More</a>
        </div>
    )
}