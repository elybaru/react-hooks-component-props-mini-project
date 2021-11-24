import React from "react";
import Article from "./Article";

function ArticleList({ arr }) {

    const articleArray = arr.map((arrayElement) => {
        return (
            <Article
                title={arrayElement.title}
                date={arrayElement.date}
                preview={arrayElement.preview}
                key={arrayElement.id}
                minutes={arrayElement.minutes} />
        )
    })

    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;