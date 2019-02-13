import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  select = {
    sourcesArray: ['abc-news', 'bbc-news'],
    placeholder: 'choose source'
  }

  login = 'login'

  ChoosenSource = 'Choosen source'

  redirectHome($event) {
    this.router.navigate(['']);
  }

  loginLogoutButton($event) {
    $event.preventDefault()
  }

  addArticleButton($event) {
    $event.preventDefault();
    this.router.navigate(['addarticle']);
  }
  
  filterFormSubmit($event) {
    $event.preventDefault()
  }

  onSelectChange(value) {
    this.ChoosenSource = value;
  }

  constructor(private router: Router) {}

  ngOnInit() {}

}
