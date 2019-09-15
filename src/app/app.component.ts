import { Component } from '@angular/core';
import { BasicItem} from './cvparts/profile/profile.component';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  basics = new MatTableDataSource<BasicItem>(BASIC_DATA);
  selection: SelectionModel<BasicItem>;
}
