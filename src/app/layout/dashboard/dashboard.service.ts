import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

Injectable()
export class DashBoardService {

    toggleSideMenu =  new EventEmitter<boolean>();

    constructor(){

    }

    toggleMenu(active: boolean){
     this.toggleSideMenu.emit(active)
    }

}