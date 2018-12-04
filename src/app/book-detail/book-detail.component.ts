import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book = {
    id: 0,
    title: "",
    author: "",
    year: 2000,
  };

  constructor(
    private bookService: BookService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.setLatestBookId();
  }

  addBook(): void {
    const newBook = this.book ;
    this.bookService.addBook(newBook)
      .subscribe(book => {
        // this.books.push(book);
        console.log("Book added", book);
        this.goBack();
      });
  }

  setLatestBookId(): void {

    this.bookService.getBooks()
        .subscribe(books => {
          this.book.id = books.length + 1 ;
        })

  }

  goBack(): void {
    this.location.back();
  }

}
