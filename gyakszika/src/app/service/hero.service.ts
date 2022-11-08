import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  apiUrl: string = environment.apiUrl;
  entityName: string = 'users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(user: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}${this.entityName}`, user);
  }

  update(user: Hero): Observable<Hero> {
    return this.http.patch<Hero>(
      `${this.apiUrl}${this.entityName}/${user.id}`,
      user
    );
  }

  remove(user: Hero): Observable<Hero> {
    return this.http.delete<Hero>(
      `${this.apiUrl}${this.entityName}/${user.id}`
    );
  }
}
