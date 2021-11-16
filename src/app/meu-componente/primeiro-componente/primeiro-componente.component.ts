import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  @Input() // recebe valor do componente PAI
  textoPadrao = '';


  
  constructor() { }

  ngOnInit(): void {
  }

}
