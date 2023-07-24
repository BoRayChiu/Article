import { Article } from "./article";

export interface ArticleService{
  
  getArticles(): Promise<Article[]>;

  removeArticle(id: number): any;

  modifyArticle(artice: Article): any;
}