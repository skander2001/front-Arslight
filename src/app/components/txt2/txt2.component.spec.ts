import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Txt2Component } from './txt2.component';

describe('Txt2Component', () => {
  let component: Txt2Component;
  let fixture: ComponentFixture<Txt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Txt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Txt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
