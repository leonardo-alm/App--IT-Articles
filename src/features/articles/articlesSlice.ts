import { createSlice } from '@reduxjs/toolkit';
import { ARTICLES } from '../../app/data';
import { RootState } from '../../app/store';
import { IArticle } from '../../interfaces/IArticle';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: ARTICLES,
  },
  reducers: {}
});

export const selectArticles = (state: RootState) => state.articles.articles;
export const filterArticles = (query: string, articles: IArticle) => {
  return Object
    .values(articles)
    .filter(article => article.title.toLowerCase().includes(query.toLowerCase()))
}

export default articlesSlice.reducer;
