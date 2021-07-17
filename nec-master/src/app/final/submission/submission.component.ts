import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  // selectedFile: File = null;
  constructor() {

   }
  // onFileSelected(event){
  //   this.selectedFile = <File>event.target.files[0];
  // }
  // onUpload(){
  //   const fd= new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('', fd).subscribe
  // }
  ngOnInit(): void {
  }

}
