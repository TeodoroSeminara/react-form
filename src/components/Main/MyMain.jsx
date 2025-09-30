import { useState } from "react";
import articleList from "./ArticleList";


function MyMain() {
    const [article, setArticle] = useState(articleList);
    const [newArticle, setNewArticle] = useState("");

    const addArticle = e => {
        e.preventDefault();

        const noSpace = newArticle.trim();
        const updateArticle = [...article, noSpace];
        setNewArticle(updateArticle);
        setNewArticle(" ");
    }

    const removeArticle = i => {
        const removeArt = article.filter((art, articleIndex) => {
            return articleIndex !== i
        });
        setArticle(removeArt);
    }


    return (
        <>
            <form onSubmit={addArticle}>
                <input type="text"
                    placeholder="Inserisci il titolo dell'articolo"
                    value={newArticle}
                    required
                    onChange={(e) => {setNewArticle(e.target.value) }}
                />
                <button type="submit">Cancella</button>
            </form>
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

        </>

    )
}

export default MyMain