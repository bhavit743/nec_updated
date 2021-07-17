<<<<<<< HEAD
import { Component, HostListener, OnInit } from '@angular/core';
import Glide from "@glidejs/glide";
import AOS from 'aos';
import 'aos/dist/aos.css';

=======
import { Component, OnInit } from '@angular/core';
import Glide from "@glidejs/glide";
>>>>>>> 92271076b906ab08abc8ab3a3d01641a7e0cfc32
declare const google: any;

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
<<<<<<< HEAD

export class LandComponent implements OnInit {
  cellscount:number = 0;
      cellscountstop:any = setInterval(()=>{
      this.cellscount++;
        if(this.cellscount==200){
          clearInterval(this.cellscountstop)
}
}, 10);
basiccount:number = 0;
      basiccountstop:any = setInterval(()=>{
      this.basiccount++;
        if(this.basiccount==350){
          clearInterval(this.basiccountstop)
}
}, 10);
advancedcount:number = 0;
      advancedcountstop:any = setInterval(()=>{
      this.advancedcount++;
        if(this.advancedcount==300){
          clearInterval(this.advancedcountstop)
}
}, 10);
citycount:number = 0;
      citycountstop:any = setInterval(()=>{
      this.citycount++;
        if(this.citycount==80){
          clearInterval(this.citycountstop)
}
}, 10);
=======
export class LandComponent implements OnInit {

>>>>>>> 92271076b906ab08abc8ab3a3d01641a7e0cfc32
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;
  focus9;
  page = 2;
  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  constructor() { }
<<<<<<< HEAD
  ngOnInit() {
    AOS.init();
=======

  ngOnInit() {
>>>>>>> 92271076b906ab08abc8ab3a3d01641a7e0cfc32
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("sections-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-default");


    // Carousel
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();




  }
  ngOnDestroy() {
  }
}
