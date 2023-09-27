import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Data Component</h2>
      <p>Data: {{ data$ | async }}</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  data$: Observable<string>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.getData();
    this.data$.subscribe((result) => {
      console.log(result);
    });
  }
}
