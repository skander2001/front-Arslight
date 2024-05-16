import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame1Component } from './test-game1.component';

describe('TestGame1Component', () => {
  let component: TestGame1Component;
  let fixture: ComponentFixture<TestGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
