import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lybra-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMore(val) {
    this.showMenu = val;
    console.log(val);
}

}
