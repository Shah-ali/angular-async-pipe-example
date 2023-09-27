import { ChangeDetectorRef, Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  template: `
    <p>Data: {{ data$ | async }}</p>
  `,
})
export class AppComponent implements OnInit {
  data$: Observable<string>;
  myResult: any;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.data$ = this.dataService.getData();
    this.data$.subscribe((data) => {
      console.log('Data received:', data);
    });
  }
}
