import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsData: Skill[];

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
    this.selectionService.education.subscribe(selection => this.skillsData = selection.map(o => o.value));
  }

  getSkillsForKeyword(keyword: string): Skill[] {
    return this.skillsData[keyword].map(o => o.value);
  }

}
