import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-fragment',
  standalone: true,
  templateUrl: './fragment.component.html',
  styleUrl: './fragment.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FragmentComponent implements OnInit {
  public providers = new Map();

  @ViewChild('app2', { static: true }) app2!: ElementRef;

  constructor(
    private readonly renderer: Renderer2,
    private readonly cd: ChangeDetectorRef,
    private readonly contentService: ContentService
  ) {}

  ngOnInit() {
    this.providers.set('contentService', this.contentService);
    this.render();
  }

  render() {
    const existingComponent =
      this.app2.nativeElement.querySelector('application-two');

    const webComponent = this.renderer.createElement('application-two');
    this.renderer.setProperty(webComponent, 'providers', this.providers);
    this.renderer.setProperty(webComponent, 'data', { key: 'value' });
    this.renderer.appendChild(this.app2.nativeElement, webComponent);
    this.cd.detectChanges();
  }
}
