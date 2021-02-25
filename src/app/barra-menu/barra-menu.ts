import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.html',
  styleUrls: ['./barra-menu.css']
})
export class BarraMenuComponent implements OnInit {
 
  constructor(private router: Router) { 
  
  }

  ngOnInit(): void {

  }

  public btnPgLogin(){
    console.log('aqui');
    this.router.navigate(['/login']);
  }
  
  public btnPgHome(){
    console.log('aqui');
    this.router.navigate(['/home']);
  }
}
