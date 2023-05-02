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
    this.title = "LOREM IPSUM";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lorem nec ipsum";
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
    this.title = "LOREM IPSUM";
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lorem nec ipsum";
  }
}

