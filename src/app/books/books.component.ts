import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  book: Book = {
    id: 1,
    title: 'Think Big',
    author: 'David',
    year: 2005,
  }

  books = BOOKS;
  constructor() { 
  }

  ngOnInit() {
    
  }

}
