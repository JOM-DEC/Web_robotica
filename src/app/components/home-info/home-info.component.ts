import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent {
  image: string = "../../../assets/image/clara.jpg";
  title: string;
  text: string;
  constructor(){
    this.title = "Hello, I'm Save";
    this.text = "Our robot will allow us to detect the different elements that can be found in a restaurant, assisting us in the task of recycling.";
  }
}

@Component({
  selector: 'app-home-info2',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info2.component.css']
})
export class HomeInfoComponent2 {
  image: string = "../../../assets/image/oscura.jpg";
  title: string;
  text: string;
  constructor(){
    this.title = "Characteristics";
    this.text = "Cutting-edge sensors, Machine learning algorithms, Intuitive interface";
  }
}

