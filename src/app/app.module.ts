import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CvpartsComponent, EditFieldDialog } from './cvparts/cvparts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PreviewComponent } from './preview/preview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { MenuComponent } from './menu/menu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    CvpartsComponent,
    PreviewComponent,
    TitlepageComponent,
    FooterComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    MenuComponent,
    EditFieldDialog
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
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [ApiService, SelectionService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents: [
    EditFieldDialog
  ]
})
export class AppModule { }
