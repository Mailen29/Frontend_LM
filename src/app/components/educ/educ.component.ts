import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged = false;

  constructor(
    private sEducacion: EducacionService,
    private tokenService: TokenService,
    private cdRef: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {
      this.educacion = data;
      this.cdRef.detectChanges();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }

}