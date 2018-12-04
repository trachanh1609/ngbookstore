import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  // book: Book = {
  //   id: 1,
  //   title: 'Think Big',
  //   author: 'David',
  //   year: 2005,
  // }

  // books = BOOKS;

  books: Book[] = [];

  constructor(private bookService: BookService) { 
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
