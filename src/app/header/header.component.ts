import { Component, OnInit } from '@angular/core';

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
    alert('loginLogoutButton');
  }

  addArticleButton($event) {
    $event.preventDefault()
    alert('addArticleButton');
  }
  
  filterFormSubmit($event) {
    $event.preventDefault()
    alert('filterFormSubmit');
  }

  onSelectChange(value) {
    alert('onSelectChange');
    this.ChoosenSource = value;
  }

  constructor() {}

  ngOnInit() {}

}
