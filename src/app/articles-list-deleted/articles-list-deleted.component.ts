import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  templateUrl: './articles-list-deleted.component.html',
  styleUrls: ['./articles-list-deleted.component.css']
})
export class ArticlesListDeletedComponent implements OnInit {
  // Liste des articles non disponnible
  articlesDeleted: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articlesDeleted = this.articleService.getDeletedArticles();
  }

  /**
   * Restaure un article supprimé
   */
  restore(article: Article) {
    this.articleService.restore(article);
  }
}
