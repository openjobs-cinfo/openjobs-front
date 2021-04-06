import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((u) => {
      console.log('CURRENT_USER', u);
    });
    this.authService.usD.subscribe((a) => {
      console.log('DEU BOM 4?', a);
    });
  }
}
