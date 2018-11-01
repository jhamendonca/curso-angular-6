import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecicle',
  templateUrl: './lifecicle.component.html',
  styleUrls: ['./lifecicle.component.css']
})
export class LifecicleComponent implements OnInit {

  constructor() { }

  data: number = 100;

  construtor() {
    console.log(` new  - data é $ { this .data }`);
  }
  //Este evento é executado toda vez que um valor de um controle de entrada dentro do componente 
  //foi alterado. Na verdade, esse evento é acionado primeiro quando um valor de uma propriedade vinculada 
  //é alterado. Ele sempre recebe um mapa de dados alterado, contendo o valor atual e o valor anterior 
  //da propriedade encadernada em um SimpleChange.

  ngOnChanges() {
    console.log(`ngOnChanges - data é $ { this .data}`);
  }

  //Esse evento é inicializado depois que o angular primeiro exibe as propriedades ligadas 
  //a dados ou quando o componente foi inicializado. Este evento basicamente é chamado apenas uma vez após 
  //os eventos ngOnChanges (). Este evento é usado principalmente para inicializar dados em um componente.

  ngOnInit() {
    console.log(`ngOnInit - data é $ { this .data}`);
  }

  // Esse evento é acionado sempre que as propriedades de entrada de um componente são verificadas. 
  // Podemos usar esse método de gancho para implementar a verificação com nossa própria verificação lógica. 
  // Basicamente, esse método nos permite implementar nossa própria lógica ou algoritmo de detecção de alteração 
  // personalizada para qualquer componente.

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  // Esse método de ciclo de vida é executado quando o Angular executa qualquer projeção de conteúdo 
  // dentro das visualizações do componente. Este método é executado somente pela primeira vez quando 
  // todas as ligações do componente precisam ser verificadas pela primeira vez. 
  // Este evento é executado logo após o método ngDoCheck (). 
  // Esse método é basicamente vinculado às inicializações de componentes filho.

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  // Esse método de gancho de ciclo de vida é executado toda vez que o conteúdo do componente é verificado 
  // pelo mecanismo de detecção de alterações do Angular. Este método é chamado após o método 
  // ngAfterContentInit (). Esse método também é chamado em toda execução subsequente de ngDoCheck (). 
  // Esse método também está relacionado principalmente com as inicializações de componente filho.

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  // Esse método de ciclo de vida é executado quando a visão do componente foi totalmente inicializada. 
  // Esse método é inicializado depois que o Angular inicializa a visualização do componente 
  // e as exibições filhas. É chamado apenas na primeira vez após ngAfterContentChecked (). 
  // Esse método de gancho do ciclo de vida aplica-se somente aos componentes.

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  // Esse método é chamado apenas depois do método ngAterViewInit (). 
  // Ele é executado toda vez que a visualização do componente fornecido foi verificada pelo 
  // algoritmo de detecção de alteração do Angular. Este método executa todas as execuções 
  // subsequentes do ngAfterContentChecked (). Esse método também é executado quando qualquer 
  // ligação das diretivas filho foi alterada. Portanto, esse método é muito útil quando o componente 
  // aguarda algum valor proveniente de seus componentes filhos.

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  // Este método será executado antes que o Angular destrua os componentes. 
  // Esse método é muito útil para cancelar a assinatura dos observáveis ​​e desanexar 
  // os manipuladores de eventos para evitar vazamentos de memória. 
  // Na verdade, ele é chamado logo antes da instância do componente ser finalmente destruída. 
  // Este método é chamado apenas uma vez antes de o componente ser removido do DOM.

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  fnAddNumber(): void {
    this.data += 100;
  }

  deleteNumber(): void {
    this.data -= 10;
  }

}
