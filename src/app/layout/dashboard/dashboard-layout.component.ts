import { Component, OnInit, EventEmitter } from "@angular/core";
import { DashBoardService } from './dashboard.service';

@Component({
  selector: "app-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.css"]
})
export class DashboardLayoutComponent implements OnInit {
  
  isCollapsed: boolean;

  constructor() {}

  ngOnInit() {}

}
