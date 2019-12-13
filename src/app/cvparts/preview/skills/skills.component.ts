import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../../models/Resume';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() skillsData;

  constructor() { }

  ngOnInit() {
  }

  getSkillsForKeyword(keyword: string): Skill[] {
    return this.skillsData[keyword].map(o => o.value);
  }

}
