import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EducComponent } from './components/educ/educ.component';
import { ExpComponent } from './components/exp/exp.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyComponent } from './components/proy/proy.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { NewexpComponent } from './components/exp/newexp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditexpComponent } from './components/exp/editexp.component';
import { NewducComponent } from './components/educ/newduc.component';
import { EditeducComponent } from './components/educ/editeduc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    EducComponent,
    ExpComponent,
    HysComponent,
    ProyComponent,
    FooterComponent,
    NewexpComponent,
    EditexpComponent,
    NewducComponent,
    EditeducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
