import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillersComponent } from './killers.component';

describe('KillersComponent', () => {
  let component: KillersComponent;
  let fixture: ComponentFixture<KillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
