import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Resume from '../models/Resume';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() getResumeInitalData = new EventEmitter<Resume>();

  availableResumes: Resume[];
  selected;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getResumes().subscribe((data: Resume[]) => this.availableResumes = data);
  }
}
