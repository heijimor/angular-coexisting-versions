import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FragmentService } from './services/fragment.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-fragment',
  standalone: true,
  imports: [],
  templateUrl: './fragment.component.html',
  styleUrl: './fragment.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FragmentComponent implements AfterViewInit {
  constructor(
    private readonly fragmentService: FragmentService,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    this.fragmentService.loadScript(
      this.renderer,
      this.document.body,
      'http://localhost:8080/main-es5.js'
    );
    this.fragmentService.loadScript(
      this.renderer,
      this.document.body,
      'http://localhost:8080/runtime-es5.js'
    );
    this.fragmentService.loadScript(
      this.renderer,
      this.document.body,
      'http://localhost:8080/polyfills-es5.js'
    );
  }
}
