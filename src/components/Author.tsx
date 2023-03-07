import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { Link, useParams } from "react-router-dom";
import { IAuthors } from "../interfaces/IAuthors";

export default function Author() {
  const { name } = useParams()
  const authors: IAuthors = useSelector(selectAuthors)
  const author = authors[name!]

  return (
    <main>
      <h1>Articles by {name}</h1>
      <ul>
        {author && author.articles ? author.articles.map(slug => (
          <li key={slug}>
            <Link to={`/articles/${slug}`}>
              {slug}
            </Link>
          </li>
        )) : <p> No Articles Found...</p>}
      </ul>
    </main>
  )
}
