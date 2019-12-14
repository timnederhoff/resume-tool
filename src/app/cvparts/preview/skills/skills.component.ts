import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../../models/Resume';
import { SelectionService } from '../../../service/selection.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  branchKnowledge: Skill[];
  methodTechniques: Skill[];
  oSes: Skill[];
  programming: Skill[];
  serverSoftware: Skill[];
  tools: Skill[];

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
    this.selectionService.skillsBranchKnowledge.subscribe(selection => this.branchKnowledge = selection.map(o => o.value));
    this.selectionService.skillsMethodTechniques.subscribe(selection => this.methodTechniques = selection.map(o => o.value));
    this.selectionService.skillsOSes.subscribe(selection => this.oSes = selection.map(o => o.value));
    this.selectionService.skillsProgramming.subscribe(selection => this.programming = selection.map(o => o.value));
    this.selectionService.skillsServerSoftware.subscribe(selection => this.serverSoftware = selection.map(o => o.value));
    this.selectionService.skillsTools.subscribe(selection => this.tools = selection.map(o => o.value));
  }
}
