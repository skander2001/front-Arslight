import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGame4Component } from './test-game4.component';

describe('TestGame4Component', () => {
  let component: TestGame4Component;
  let fixture: ComponentFixture<TestGame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGame4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
