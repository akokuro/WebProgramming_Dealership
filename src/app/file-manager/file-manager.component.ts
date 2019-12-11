import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.less']
})
export class FileManagerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  fileChange(event): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file = fileList[0];

            const formData = new FormData();
            formData.append('file', file, file.name);

            this.http.post('http://dev.localhost:5000/upload/', formData, {withCredentials: true})
                 .subscribe(
                     data => console.log('success'),
                     error => console.log(error)
                 );
        }
    }
}
