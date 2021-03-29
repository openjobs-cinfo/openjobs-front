import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.scss'],
})
export class ModalItemComponent implements OnInit {
  @Input('title') public title: string;
  @Input('description') public description: string;
  @Input('link') public link: string;
  @Input('display') public display: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log('AQUI!!!');
  }
}
