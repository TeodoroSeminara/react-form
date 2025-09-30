import articleList from "./ArticleList";

function FormArticle() {
    const [article, setArticle] = useState(articleList);

    return (

        <ul>
            {article.map((article) => (
                <li
                    key={article.id}>
                    {article.title}
                    <button onClick={() => removeArticle(article.id)}>
                        Elimina
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default FormArticle