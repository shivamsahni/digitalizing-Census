import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalpopulationregisterComponent } from './nationalpopulationregister.component';

describe('NationalpopulationregisterComponent', () => {
  let component: NationalpopulationregisterComponent;
  let fixture: ComponentFixture<NationalpopulationregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalpopulationregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalpopulationregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
