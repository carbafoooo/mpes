import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import "bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsModule } from "./icons/icons.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginLayoutComponent } from "./layout/login/login-layout.component";
import { RegisterLayoutComponent } from "./layout/register/register-layout.component";

import { DashboardLayoutComponent } from "./layout/dashboard/dashboard-layout.component";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { HeaderComponent } from "./components/header/header.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    RegisterFormComponent,
    LoginLayoutComponent,
    LoginFormComponent,
    RegisterLayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
