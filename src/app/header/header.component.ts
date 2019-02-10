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

  form = {
    placeholder: 'type your text...',
    button: 'filter'
  }

  checkbox = 'Only created by me'

  ChoosenSource = 'Choosen source'

  constructor() {}

  ngOnInit() {}

}
