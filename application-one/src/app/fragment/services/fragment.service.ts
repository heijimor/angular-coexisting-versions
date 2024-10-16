import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FragmentService {
  public loadScript(
    renderer: Renderer2,
    document: HTMLElement,
    src: string
  ): void {
    if (!this.isScriptAlreadyLoaded(document, src)) {
      const script = renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      document.appendChild(script);
    }
  }

  isScriptAlreadyLoaded(document: HTMLElement, src: string): boolean {
    return !!document.querySelector(`script[src="${src}"]`);
  }
}
