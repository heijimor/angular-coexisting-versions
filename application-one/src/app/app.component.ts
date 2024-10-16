import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FragmentComponent } from './fragment/fragment.component';
import { FragmentService } from './fragment/services/fragment.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FragmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(
    private readonly fragmentService: FragmentService,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const scripts = [
      'http://localhost:8080/main-es5.js',
      'http://localhost:8080/runtime-es5.js',
      'http://localhost:8080/polyfills-es5.js',
      'http://localhost:8080/scripts.js',
      'http://localhost:8080/vendor-es5.js',
    ];

    scripts.forEach((scriptUrl) => {
      this.fragmentService.loadScript(
        this.renderer,
        this.document.body,
        scriptUrl
      );
    });
  }
}
