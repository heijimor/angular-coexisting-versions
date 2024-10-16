import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";

interface ProviderApp {
  getData: () => { data: string; asyncData: Observable<string> };
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @Input() public providers: Map<string, ProviderApp>;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.cd.detectChanges();
    if (this.providers) {
      const contentService = this.providers.get("contentService");
      console.log(this.providers);
      console.log(contentService.getData());
      contentService.getData().asyncData.subscribe((response: string) => {
        console.log(response);
      });
    }
  }
}
