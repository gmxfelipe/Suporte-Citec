import { Component, OnInit } from '@angular/core';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { CalendarDateFormatter } from 'angular-calendar';
import { Router } from '@angular/router';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }]
})
export class HomeMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('010101') && !localStorage.getItem('0000')) {
      this.router.navigate(['']);
    }
  }

  sair() {
    localStorage.removeItem("010101");
    localStorage.removeItem("0000");
    this.router.navigate([""]);
  }
}
