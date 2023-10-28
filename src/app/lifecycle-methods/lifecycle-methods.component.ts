import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods',
  templateUrl: './lifecycle-methods.component.html',
  styleUrls: ['./lifecycle-methods.component.css']
})
export class LifecycleMethodsComponent {
  constructor() {
    console.log('constructor()');
  }
  ngOnChanges(): void{
    console.log('ngOnChanges()');
  }

  ngOnInit(): void{
    console.log('ngOnIint()');
  }

  ngOnDestroy(): void{
    console.log('ngOnDestroy()');
  }
}
