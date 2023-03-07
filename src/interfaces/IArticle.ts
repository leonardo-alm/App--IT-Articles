export interface IArticle {
    [name: string]: {
        title: string;
        body: string;
        author: string;
        slug: string;
    }
}