import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctFormComponent } from './selct-form.component';

describe('SelctFormComponent', () => {
  let component: SelctFormComponent;
  let fixture: ComponentFixture<SelctFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelctFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
