import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  // O pai escuta o  evento filho
  // O componente filho expõe uma EventEmitter propriedade com a qual ele emit
  // eventos quando algo acontece. O pai escuta a essa propriedade do evento e reage a esses eventos.
  // A EventEmitter propriedade é uma propriedade de saída , normalmente adornada com uma decoração.
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
