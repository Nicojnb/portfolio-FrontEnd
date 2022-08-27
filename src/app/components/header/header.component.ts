import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  iconInsta = faInstagram
  iconFB= faFacebookSquare
  iconTw=faTwitter

  constructor() { }

  ngOnInit(): void {
  }

}
