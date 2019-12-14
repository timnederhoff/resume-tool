import { Injectable } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectionService {

  private workSource = new BehaviorSubject([]);
  work = this.workSource.asObservable();

  private educationSource = new BehaviorSubject([]);
  education = this.educationSource.asObservable();

  private languagesSource = new BehaviorSubject([]);
  languages = this.languagesSource.asObservable();

  private skillsMethodTechniquesSource = new BehaviorSubject([]);
  skillsMethodTechniques = this.skillsMethodTechniquesSource.asObservable();

  private skillsBranchKnowledgeSource = new BehaviorSubject([]);
  skillsBranchKnowledge = this.skillsBranchKnowledgeSource.asObservable();

  private skillsProgrammingSource = new BehaviorSubject([]);
  skillsProgramming = this.skillsProgrammingSource.asObservable();

  private skillsServerSoftwareSource = new BehaviorSubject([]);
  skillsServerSoftware = this.skillsServerSoftwareSource.asObservable();

  private skillsToolsSource = new BehaviorSubject([]);
  skillsTools = this.skillsToolsSource.asObservable();

  private skillsOSesSource = new BehaviorSubject([]);
  skillsOSes = this.skillsOSesSource.asObservable();

  private higherEducationSource = new BehaviorSubject([]);
  higherEducation = this.higherEducationSource.asObservable();

  private otherEducationSource = new BehaviorSubject([]);
  otherEducation = this.otherEducationSource.asObservable();

  constructor() {
  }

  updateSelection(category: string, options: MatListOption[]) {
    this[category].next(options);
  }
}
