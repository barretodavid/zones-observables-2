import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

interface Person {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <b>Angular 2 HTTP requests using RxJs Observables!</b>
    <div><code>{{ doctors.toString() }}</code></div>
  `
})
export class AppComponent {
  doctors: any[] = [];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users/')
      .flatMap(data => data.json())
      .filter((person: Person) => person.id > 5)
      .map((person: Person) => 'Dr. ' + person.name)
      .subscribe((data) => {
        this.doctors.push(data);
    });
  }
}
