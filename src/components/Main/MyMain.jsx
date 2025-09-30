import { useState } from "react";
import articleList from "./ArticleList";

function MyMain() {
    const [article, setArticle] = useState(articleList);
    const [newArticle, setNewArticle] = useState("");
    // const lastArticle = articleList.length + 1;
    // const [id, setId] = useState(lastArticle);

    // Funzione per aggiungere articolo aggiunto
    const addArticle = event => {
        event.preventDefault();

        const noSpace = newArticle.trim();
        // const updateArticle = [...article, { id, title: noSpace }];
        const updateArticle = [...article, { id: article.length + 1, title: noSpace }];
        // setId(id + 1); 
        setArticle(updateArticle);
        setNewArticle("");
    }

    // funzione per rimuovere l'articolo aggiunto
    const removeArticle = i => {
        const removeArt = article.filter((art) => {
            return art.id !== i
        });
        setArticle(removeArt);
    }


    return (
        <section className="container">
            <form onSubmit={addArticle}>
                <input type="text"
                    placeholder="Inserisci il titolo dell'articolo"
                    value={newArticle}
                    required
                    onChange={(e) => { setNewArticle(e.target.value) }}
                />
                <button type="submit"><i className="fa-solid fa-square-plus add-btn"></i></button>
            </form>
            <ul>
                {article.map((article) => (
                    <li
                        key={article.id}>
                        {article.title}
                        <button onClick={() => removeArticle(article.id)}>
                            <i className="fa-solid fa-trash-can delete-btn"></i>
                        </button>
                    </li>
                ))}
            </ul>

        </section>

    )
}

export default MyMain