import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.component.html',
  styleUrls: ['./presente.component.css']
})
export class PresenteComponent implements OnInit {

  constructor(private route: Router, private retaAcao: ActivatedRoute) { 

  }

  ngOnInit(): void {
    
  }

}
