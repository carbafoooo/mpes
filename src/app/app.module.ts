import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_ICONS } from "ng-zorro-antd";
import { IconDefinition } from "@ant-design/icons-angular";
import { IconsModule } from "./icons/icons.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginLayoutComponent } from "./layout/login/login-layout.component";
import { RegisterLayoutComponent } from "./layout/register/register-layout.component";

import { DashboardLayoutComponent } from "./layout/dashboard/dashboard-layout.component";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    RegisterFormComponent,
    LoginLayoutComponent,
    LoginFormComponent,
    RegisterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    IconsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
