import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-icon-badge',
  templateUrl: './ui-icon-badge.component.html',
  styleUrls: ['./ui-icon-badge.component.css']
})
export class UiIconBadgeComponent implements OnInit {
  label! : string;
  constructor() { }

  ngOnInit(): void {
    this.label = (localStorage.getItem('user') || '')
  }

}
