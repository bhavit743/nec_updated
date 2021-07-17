<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component, OnInit,OnDestroy } from '@angular/core';
import Glide from "@glidejs/glide";
import Choices from 'choices.js';
>>>>>>> 92271076b906ab08abc8ab3a3d01641a7e0cfc32
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
<<<<<<< HEAD
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
=======
export class BasicComponent implements OnInit,OnDestroy {

  isCollapsed = true;
  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.add("bg-primary");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("product-page");

    new Glide('.testimonial-glide', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }).mount();

    new Choices('#choices-single-default', {
      searchEnabled: false,
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("presentation-page");
    var navbar = document.getElementById("navbar-main");
    navbar.classList.remove("bg-primary");
>>>>>>> 92271076b906ab08abc8ab3a3d01641a7e0cfc32
  }

}
