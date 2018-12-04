import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


const defaultBook: Book = {
  id: 0,
  title: "",
  author: "",
  year: 2000,
};


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

  isEditView: boolean = false;

  constructor(
    private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setView();
    this.setCurrentBookbyView();
    
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

  setView() {
    const id = this.route.snapshot.paramMap.get('id');

    this.isEditView = id ? true : false ;
    
  }

  setCurrentBookbyView() {
    if(this.isEditView) {
      this.setBookById();
    } else {
      this.setLatestBookId();
    }
  }

  setBookById(): void {
    const id =  +this.route.snapshot.paramMap.get('id') ;
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);

  }

  setLatestBookId(): void {

    this.bookService.getBooks()
        .subscribe(books => {
          this.book.id = books.length + 1 ;
        })

  }

  saveBook(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
