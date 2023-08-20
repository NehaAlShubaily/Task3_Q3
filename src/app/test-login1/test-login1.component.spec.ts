import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogin1Component } from './test-login1.component';

describe('TestLogin1Component', () => {
  let component: TestLogin1Component;
  let fixture: ComponentFixture<TestLogin1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLogin1Component]
    });
    fixture = TestBed.createComponent(TestLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
