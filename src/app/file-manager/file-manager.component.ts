import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.less']
})
export class FileManagerComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private files = [["blabla", "bla"]]
  ngOnInit() {
    this.updateFiles()
  }

  updateFiles() {
    this.http.post('http://dev.localhost:5000/files/list/', {}, { withCredentials: true }).subscribe((data: Array<Array<string>>) => {
      this.files = []
      console.log(data)
      data.forEach(element => {
        element[0] = "http://dev.localhost:5000/files/download/" + element[0]
        this.files.push(element)
      });
    });
  }

  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];

      const formData = new FormData();
      formData.append('file', file, file.name);
      var d = null;
      this.http.post('http://dev.localhost:5000/files/upload/', formData, { withCredentials: true })
        .subscribe(
          o => {
            let element = o as string[];
            element[0] = "http://dev.localhost:5000/files/download/" + element[0]
            this.files.push(element)
          },
          error => console.log(error)
        );
    }
  }
}
