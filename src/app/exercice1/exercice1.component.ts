import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public hello: string = 'hello';
  public color: string = 'green';

  public sayHello():void{

    console.log('Hello depuis un event');
  }

}
