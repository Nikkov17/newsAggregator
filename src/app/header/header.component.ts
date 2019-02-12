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

  loginLogoutButton($event) {
    $event.preventDefault()
    console.log('loginLogoutButton');
  }

  addArticleButton($event) {
    $event.preventDefault();
    this.router.navigate(['addarticle']);
    console.log('addArticleButton');
  }
  
  filterFormSubmit($event) {
    $event.preventDefault()
    console.log('filterFormSubmit');
  }

  onSelectChange(value) {
    console.log('onSelectChange');
    this.ChoosenSource = value;
  }

  constructor(private router: Router) {}

  ngOnInit() {}

}
