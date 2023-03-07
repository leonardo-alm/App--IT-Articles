import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { selectArticles } from '../features/articles/articlesSlice';
import { Link, useParams } from 'react-router-dom';
import { ICategory } from '../interfaces/ICategory';
import { IArticle } from '../interfaces/IArticle';

export default function Category() {
  const categories: ICategory = useSelector(selectCategories)
  const articles: IArticle = useSelector(selectArticles)
  const { name } = useParams()

  return (
    <div>
      <h2>Articles Related to {name}:</h2>
      <ul>
        {categories[name!].map(articleSlug => (
          <li>
            <Link to={`/articles/${articleSlug}`}>{articles[articleSlug].title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
