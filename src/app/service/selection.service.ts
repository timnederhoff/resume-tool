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

  private skillsSource = new BehaviorSubject([]);
  skills = this.educationSource.asObservable();

  constructor() {
  }

  updateSelection(category: string, options: MatListOption[]) {
    this[category].next(options);
  }
}
