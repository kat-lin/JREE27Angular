import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',

  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  text = ""
  counter = 0;
  showMsg = true;
  incrementCounter(event:any): void{

    //console.log("Button clicked");
    console.log(`<<< ${JSON.stringify(event)}`);
    console.log(event);
    this.counter += 1;
    
  }

  
  toggleCounterVis = (): void => {
    //this.showMsg = this.showMsg ? false : true;
    this.showMsg = !this.showMsg;
    /** 
    if (this.showMsg === true)
      this.showMsg = false;
    else
      this.showMsg= true;
    */
  }
  //toggleCounterVis2 = (): void => {this.showMsg = !this.showMsg;}
}
