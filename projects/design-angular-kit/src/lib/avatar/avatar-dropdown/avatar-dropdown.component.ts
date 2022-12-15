import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.css'],
  host: { 'class': 'avatar avatar-dropdown' }
})
export class AvatarDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
