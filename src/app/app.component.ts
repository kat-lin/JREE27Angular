import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JREE27Angular';
  name = 'John';

  getString(): string{
    console.log("<<<<<<");
    return `!!!!`;
  }
}
