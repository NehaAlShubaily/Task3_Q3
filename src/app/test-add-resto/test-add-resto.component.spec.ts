import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAddRestoComponent } from './test-add-resto.component';

describe('TestAddRestoComponent', () => {
  let component: TestAddRestoComponent;
  let fixture: ComponentFixture<TestAddRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAddRestoComponent]
    });
    fixture = TestBed.createComponent(TestAddRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
