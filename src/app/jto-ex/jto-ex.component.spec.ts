import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtoExComponent } from './jto-ex.component';

describe('JtoExComponent', () => {
  let component: JtoExComponent;
  let fixture: ComponentFixture<JtoExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtoExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JtoExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
