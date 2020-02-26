import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard/dashboard-layout.component";
import { RegisterLayoutComponent } from "./layout/register/register-layout.component";
import { LoginLayoutComponent } from "./layout/login/login-layout.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardLayoutComponent },
  { path: "login", component: LoginLayoutComponent },
  { path: "register", component: RegisterLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
