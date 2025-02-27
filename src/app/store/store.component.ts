import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  items=[
    {name:"store 1", location:"location 1"},
    {name:"store 2", location:"location 2"},
    {name:"store 3", location:"location 3"},
    {name:"store 4", location:"location 4"},
    {name:"store 5", location:"location 5"},
    {name:"store 6", location:"location 6"},
  ]

}
