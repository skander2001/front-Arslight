import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalWorldComponent } from './natural-world.component';

describe('NaturalWorldComponent', () => {
  let component: NaturalWorldComponent;
  let fixture: ComponentFixture<NaturalWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NaturalWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
