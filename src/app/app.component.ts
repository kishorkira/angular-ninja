import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent, DirectoryComponent]
})
export class AppComponent {
  title = 'my-app';
}
