import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFormComponent } from './toy-form.component';

describe('ToyFormComponent', () => {
  let component: ToyFormComponent;
  let fixture: ComponentFixture<ToyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
