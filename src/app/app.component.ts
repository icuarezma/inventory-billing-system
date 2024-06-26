import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationModule } from '../modules/authentication/authentication.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibs';
}
