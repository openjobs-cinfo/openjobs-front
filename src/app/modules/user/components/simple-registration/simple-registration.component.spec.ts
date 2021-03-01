import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRegistrationComponent } from './simple-registration.component';

describe('SimpleRegistrationComponent', () => {
  let component: SimpleRegistrationComponent;
  let fixture: ComponentFixture<SimpleRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
