import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_ICONS } from "ng-zorro-antd";
import { IconDefinition } from "@ant-design/icons-angular";
import { IconsModule } from "./icons/icons.module";

import { DashboardComponent } from "./layout/dashboard/dashboard.component";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { LoginComponent } from "./layout/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
