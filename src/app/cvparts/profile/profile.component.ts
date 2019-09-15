import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface BasicItem {
  key: string;
  name: string;
  value: string;
  position: number;
}

const BASIC_DATA: BasicItem[] = [
  {
    key: 'basic.name',
    name: 'Naam',
    value: 'Tim Nederhoff',
    position: 1
  },
  {
    key: 'basic.age',
    name: 'Leeftijd',
    value: '35 jaar',
    position: 2
  }];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  basics = new MatTableDataSource<BasicItem>(BASIC_DATA);
  columnsToDisplay = ['select', 'name', 'value'];
  selection = new SelectionModel<BasicItem>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.basics.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.basics.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: BasicItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
