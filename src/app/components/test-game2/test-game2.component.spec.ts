import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame2Component } from './test-game2.component';

describe('TestGame2Component', () => {
  let component: TestGame2Component;
  let fixture: ComponentFixture<TestGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
