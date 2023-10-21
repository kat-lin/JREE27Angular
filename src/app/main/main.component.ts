import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  whichBannerToShow:string = (Math.random() > 0.5 ? `assets/diego-rosa-unsplash.jpg` : `assets/shlomi-platzman-unsplash.jpg`);
  
  title = '\"Dancers at the scene\"';
  name1 = 'Diego Rosa';
  name2 = 'Shlomi Platzman';
  
  getString(): string{
    
    console.log("<<<<>>>>");
    return `from Unsplash`;
  }
}
