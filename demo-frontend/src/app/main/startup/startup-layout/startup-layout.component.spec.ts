import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupLayoutComponent } from './startup-layout.component';

describe('StartupLayoutComponent', () => {
  let component: StartupLayoutComponent;
  let fixture: ComponentFixture<StartupLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
