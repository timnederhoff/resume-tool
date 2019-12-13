import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import Resume from './models/Resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  opened = true;
  resumeData: Resume;

  constructor(private apiService: ApiService) {
  }

  getResume(rid: string) {
    this.apiService.getResume(rid).subscribe(data => {
      this.resumeData = data;
    });
  }

}
