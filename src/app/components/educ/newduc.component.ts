import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-newduc',
  templateUrl: './newduc.component.html',
  styleUrls: ['./newduc.component.css']
})
export class NewducComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const educacion = new Educacion (this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Experiencia añadida");
        location.reload();
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
