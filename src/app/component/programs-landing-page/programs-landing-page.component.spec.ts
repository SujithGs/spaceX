import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsLandingPageComponent } from './programs-landing-page.component';

describe('ProgramsLandingPageComponent', () => {
  let component: ProgramsLandingPageComponent;
  let fixture: ComponentFixture<ProgramsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
