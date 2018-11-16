import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilterPipe} from '../filter.pipe';
 
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes:[FilterPipe]
})
export class DirectoryComponent implements OnInit {
  ninjas=[
    {name:'ram',belt:'black'},
    {name:'ajay',belt:'red'},
    {name:'naren',belt:'yellow'}
    
  ];
  term="";
  constructor(private route:ActivatedRoute) { 
    // this.ninja = route.snapshot.params['ninja']

  }

  ngOnInit() {
  }

}
