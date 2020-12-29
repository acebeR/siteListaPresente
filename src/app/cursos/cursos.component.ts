import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  url: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.url = 'www.google.com.br';
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
