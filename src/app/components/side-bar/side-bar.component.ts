import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DashBoardService } from 'src/app/layout/dashboard/dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {

  @Input() isCollapse: boolean;

  constructor() { }

  ngOnInit() {
  }


}
