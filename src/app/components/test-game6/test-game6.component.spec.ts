import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame6Component } from './test-game6.component';

describe('TestGame6Component', () => {
  let component: TestGame6Component;
  let fixture: ComponentFixture<TestGame6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
