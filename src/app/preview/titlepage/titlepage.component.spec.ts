import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlepageComponent } from './titlepage.component';

describe('TitlepageComponent', () => {
  let component: TitlepageComponent;
  let fixture: ComponentFixture<TitlepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
