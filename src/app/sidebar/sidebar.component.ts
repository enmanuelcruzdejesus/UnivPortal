import { Component, OnInit } from '@angular/core';

declare const SideNavJs: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    SideNavJs();
  }

}
