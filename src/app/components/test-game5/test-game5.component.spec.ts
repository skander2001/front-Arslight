import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame5Component } from './test-game5.component';

describe('TestGame5Component', () => {
  let component: TestGame5Component;
  let fixture: ComponentFixture<TestGame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
