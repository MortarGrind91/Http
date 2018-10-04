import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rout-app';

  constructor(private router: Router){
  
  }

  goToAbout(id){
    this.router.navigate(['about', id]);
  }
}
