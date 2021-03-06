import { Component, OnInit, OnDestroy } from "@angular/core";
import Choices from 'choices.js';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("account-settings");

    new Choices('#choices-single-default', {
      searchEnabled: false,
    });
    new Choices('#choices-single-default2', {
      searchEnabled: false,
    });
    new Choices('#choices-single-default3', {
      searchEnabled: false,
    });
    new Choices('#choices-single-default4', {
      searchEnabled: false,
    });
    new Choices('#choices-single-default5', {
      searchEnabled: false,
    });
    new Choices('#choices-single-default6', {
      searchEnabled: false,
    });
    new Choices('#badges', {
      delimiter: ',',
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("account-settings");
  }
}
