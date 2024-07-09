import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FragmentService {
  public loadScript(
    renderer: Renderer2,
    document: HTMLElement,
    url: string
  ): void {
    const script = renderer.createElement('script');
    renderer.setAttribute(script, 'src', url);
    renderer.appendChild(document, script);
  }
}
