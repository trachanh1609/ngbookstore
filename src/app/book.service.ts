import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:4000/api/books/';

  constructor(private http: HttpClient,) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError( (err,caught) => caught)
      )
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError( (err,caught) => caught)
    );
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError( (err,caught) => caught)
    );
  }

  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;

    return this.http.put(url, book, httpOptions).pipe(
      catchError( (err,caught) => caught)
    );
  }

  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
  
    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError( (err,caught) => caught)
    );
  }

}
