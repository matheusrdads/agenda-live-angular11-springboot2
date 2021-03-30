import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-list', //selector serve para referenciar os elementos nos arquivos Ex: <app-live-list> <app-live-list> invocará esse componente
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
