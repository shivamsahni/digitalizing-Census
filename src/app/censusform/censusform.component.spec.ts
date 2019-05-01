import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusformComponent } from './censusform.component';

describe('CensusformComponent', () => {
  let component: CensusformComponent;
  let fixture: ComponentFixture<CensusformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensusformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
