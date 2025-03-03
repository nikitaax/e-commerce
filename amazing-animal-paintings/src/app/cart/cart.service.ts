import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + '/cart';
  private apiCheckoutUrl = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }
  getCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  clearCart(): Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }

  checkoutCart(products:Product[]): Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl,products);
  }
}
