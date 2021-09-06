import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  // Model de donée d'un article
  article: Article;
  // Liste des articles disponible
  articles: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.reinitModel();
  }

  /**
   * Création d'un nouvel article et ajout au tableau
   * @param article Nouvelle article
   */
  createArticle(article) {
    this.articleService.createArticle(article);
    this.reinitModel();
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article);
  }

  reinitModel() {
    this.article = new Article();
  }
}
