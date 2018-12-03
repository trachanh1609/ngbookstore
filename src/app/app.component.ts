import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'NgBookStore';
  books: Book[] = [];

  constructor(
    private bookService: BookService,
      ) {

  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
          .subscribe(books=> {
            console.log("books", books);
            this.books = books
          });
  }
  
}
