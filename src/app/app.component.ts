import { Component } from '@angular/core';
import { ICurso } from './icurso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  nomeCurso = 'Angular 6';

  principal = 'Principal';

  curso: ICurso = {
    nomeCurso: 'Angular',
    versao: 7
  };

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }




}
