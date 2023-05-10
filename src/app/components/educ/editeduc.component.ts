import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeduc',
  templateUrl: './editeduc.component.html',
  styleUrls: ['./editeduc.component.css']
})
export class EditeducComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private sEduacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }


    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEduacion.detail(id).subscribe(
        data => {
          this.educacion = data;
        }, err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEduacion.update(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
  
  }