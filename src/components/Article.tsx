import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import { useParams, Link } from 'react-router-dom';
import { IArticle } from '../interfaces/IArticle';
/* import ReactMarkdown from 'react-markdown'; */

export default function Article() {
  const articles: IArticle = useSelector(selectArticles)
  const { title } = useParams()
  const article = articles[title!]

  return article ? (
    <main className='article-container'>
      <h1 className='article-title'>{article.title}</h1>
      <p>By <Link to={`/authors/${article.author}`}>{article.author}</Link></p>
      {/*       <ReactMarkdown>
        {article.body}
      </ReactMarkdown> */}
      {article.body}
    </main>
  ) : <p> No article found with that title... </p>
}
