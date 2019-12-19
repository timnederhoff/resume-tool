import { Component, Inject, Input } from '@angular/core';
import Resume, { Education, Skill } from '../models/Resume';
import { SelectionService } from '../service/selection.service';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cvparts',
  templateUrl: 'cvparts.component.html',
  styleUrls: ['cvparts.component.css']
})
export class CvpartsComponent {

  private basics;
  private work;
  private skillsMethodTechniques;
  private skillsBranchKnowledge;
  private skillsProgramming;
  private skillsServerSoftware;
  private skillsTools;
  private skillsOSes;
  private higherEducation;
  private otherEducation;
  private languages;

  @Input() resumeData: Resume;

  constructor(private selectionService: SelectionService, public translate: TranslateService, public dialog: MatDialog) {
  }

  getSkillsForKeyword(requestedKeyword: string): Skill[] {
    return this.resumeData.skills.filter(skill => skill.keywords.includes(requestedKeyword));
  }

  getHigherEducation(): Education[] {
    return this.resumeData.education.filter(ed => ['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

  getOtherEducation(): Education[] {
    return this.resumeData.education.filter(ed => !['Master', 'MBO', 'Bachelor'].includes(ed.studyType));
  }

  editField(text: string) {
    this.dialog.open(EditFieldDialog, {
      width: '250px',
      data: text
    });
  }
}

@Component({
  selector: 'dialog-edit-field-dialog',
  templateUrl: 'edit-field-dialog.component.html'
})
export class EditFieldDialog {

  constructor(
    public dialogRef: MatDialogRef<EditFieldDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

}
