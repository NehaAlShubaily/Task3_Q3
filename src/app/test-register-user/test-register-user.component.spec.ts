import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRegisterUserComponent } from './test-register-user.component';

describe('TestRegisterUserComponent', () => {
  let component: TestRegisterUserComponent;
  let fixture: ComponentFixture<TestRegisterUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRegisterUserComponent]
    });
    fixture = TestBed.createComponent(TestRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
