import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../../../assets/cursos.json';

  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Course[]>(this.API)
      .pipe(
        take(1), //Assim que obter a primeira resposta faz o unsubscribe
        delay(5000),
        tap(courses => console.log(courses))
      );
  }
}
