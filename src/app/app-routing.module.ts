import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";
import { LoginComponent } from "./layout/login/login.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
