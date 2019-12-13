import { Injectable } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectionService {

  private source = new BehaviorSubject([]);
  selection = this.source.asObservable();

  constructor() {
  }

  updateSelection(options: MatListOption[]) {
    this.source.next(options);
  }
}
