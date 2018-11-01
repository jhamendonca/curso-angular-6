import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecicleComponent } from './lifecicle.component';

describe('LifecicleComponent', () => {
  let component: LifecicleComponent;
  let fixture: ComponentFixture<LifecicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
