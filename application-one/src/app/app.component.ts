import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FragmentComponent } from './fragment/fragment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FragmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'application-one';
}
