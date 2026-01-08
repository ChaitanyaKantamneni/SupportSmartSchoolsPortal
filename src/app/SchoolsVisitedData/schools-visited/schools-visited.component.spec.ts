import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsVisitedComponent } from './schools-visited.component';

describe('SchoolsVisitedComponent', () => {
  let component: SchoolsVisitedComponent;
  let fixture: ComponentFixture<SchoolsVisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsVisitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
