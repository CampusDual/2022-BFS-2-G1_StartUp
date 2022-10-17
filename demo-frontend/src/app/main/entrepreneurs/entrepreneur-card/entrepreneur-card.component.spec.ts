import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurCardComponent } from './entrepreneur-card.component';

describe('EntrepreneurCardComponent', () => {
  let component: EntrepreneurCardComponent;
  let fixture: ComponentFixture<EntrepreneurCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepreneurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
