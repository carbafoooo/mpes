import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.css"]
})
export class DashboardLayoutComponent implements OnInit {
  active: Boolean
  constructor() {}


  ngOnInit() {}
  onClick(){
    this.active = !this.active
    console.log(this.active)
  }
}
