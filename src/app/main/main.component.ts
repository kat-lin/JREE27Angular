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

  creatorFunction(): string {
    let creator = new Creator(this.personCreator());
    return creator.writeName();
  }

  personCreator(): string {
    let person = new Person('Katlin', 'Kalde');
    return person.getFullName();
  }
}

class Creator {
  name: string;

  constructor(message: string) {
    this.name = message;
  }

  writeName() {
    return "Created by " + this.name;
  }
}

class Person {
  private fullName: string;
  constructor(private firstName: string, private lastName: string) {
    this.fullName = firstName + " " + lastName;
  }

  public getFullName() {
    return this.fullName;
  }
}



