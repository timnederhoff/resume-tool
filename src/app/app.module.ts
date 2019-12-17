import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CvpartsComponent } from './cvparts/cvparts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PreviewComponent } from './preview/preview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TitlepageComponent } from './preview/titlepage/titlepage.component';
import { FooterComponent } from './preview/footer/footer.component';
import { WorkComponent } from './preview/work/work.component';
import { SkillsComponent } from './preview/skills/skills.component';
import { EducationComponent } from './preview/education/education.component';
import { ApiService } from './service/api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SelectionService } from './service/selection.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CvpartsComponent,
    PreviewComponent,
    TitlepageComponent,
    FooterComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ApiService, SelectionService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
