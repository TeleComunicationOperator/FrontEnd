import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeDashComponent } from './home-dash/home-dash.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HomeOperatorComponent } from './home-operator/home-operator.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { PopUpUpdateProfileComponent } from './pop-up-update-profile/pop-up-update-profile.component';
import { UpdateFormProfileComponent } from './update-form-profile/update-form-profile.component';
import {MatInputModule} from '@angular/material/input';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SeeOperatorInformationComponent } from './see-operator-information/see-operator-information.component';
import { SeeClientInfoComponent } from './see-client-info/see-client-info.component';
import { KeyWordsAdminComponent } from './key-words-admin/key-words-admin.component';
import { AddKeyWordFormComponent } from './add-key-word-form/add-key-word-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeDashComponent,
    NavBarComponent,
    HomeComponent,
    ClientesComponent,
    HomeOperatorComponent,
    ClientesAdminComponent,
    PopUpUpdateProfileComponent,
    UpdateFormProfileComponent,
    LandingPageComponent,
    SeeOperatorInformationComponent,
    SeeClientInfoComponent,
    KeyWordsAdminComponent,
    AddKeyWordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
