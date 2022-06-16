import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofDetailsComponent } from './roof-details.component';

describe('RoofDetailsComponent', () => {
  let component: RoofDetailsComponent;
  let fixture: ComponentFixture<RoofDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoofDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
