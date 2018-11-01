import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../icurso';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() curso : ICurso
  @Input('principal')  principal : string;
  
  constructor() { }

  ngOnInit() {
  }

}
