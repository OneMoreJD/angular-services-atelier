import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  deletedArticles: Article[];

  constructor() {
    this.deletedArticles = [];
    this.articles = this.getFromLocalStorage();
  }

  createArticle(article: Article): void {
    this.articles.push(article);
  }

  deleteArticle(article: Article): void {
    this.moveArticle(article, this.articles, this.deletedArticles);
  }

  restore(article: Article) {
    this.moveArticle(article, this.deletedArticles, this.articles);
  }

  getArticles(): Article[] {
    return this.articles;
  }

  getDeletedArticles(): Article[] {
    return this.deletedArticles;
  }

  private getFromLocalStorage(): Article[] {
    const stringData = localStorage.getItem('articles');
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }

  /**
   * Déplacement d'un article
   * @param article Article à déplacer
   * @param from Tableau où l'article doit être enlevé
   * @param to Tableau où l'article doit être ajouté
   */
  moveArticle(article: Article, from: Article[], to: Article[]) {
    const index = from.findIndex( x => x.id === article.id);
    // add the element to "to" array
    to.push(from[index]);
    // remove the element to "from" array
    from.splice(index, 1);
  }
}
