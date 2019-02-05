import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReactiveEditComponent } from './hero-reactive-edit.component';

describe('HeroReactiveEditComponent', () => {
  let component: HeroReactiveEditComponent;
  let fixture: ComponentFixture<HeroReactiveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroReactiveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReactiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
