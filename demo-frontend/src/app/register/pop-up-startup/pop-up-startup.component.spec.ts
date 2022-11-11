import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpStartupComponent } from './pop-up-startup.component';

describe('PopUpStartupComponent', () => {
  let component: PopUpStartupComponent;
  let fixture: ComponentFixture<PopUpStartupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpStartupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
