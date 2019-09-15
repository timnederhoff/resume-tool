import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpartsComponent } from './cvparts.component';

describe('CvpartsComponent', () => {
  let component: CvpartsComponent;
  let fixture: ComponentFixture<CvpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
