import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame3Component } from './test-game3.component';

describe('TestGame3Component', () => {
  let component: TestGame3Component;
  let fixture: ComponentFixture<TestGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
