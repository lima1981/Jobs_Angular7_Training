import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsComponent } from './hero-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from 'src/app/services/hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


describe('HeroDetailsComponent', () => {
  let component: HeroDetailsComponent;
  let fixture: ComponentFixture<HeroDetailsComponent>;

  let heroServiceSpy: jasmine.SpyObj<HeroService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('heroService', ['getHeroes']);

      // Provide both the service-to-test and its (spy) dependency
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsComponent ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([{path: '', component: HeroDetailsComponent}

        ])
      ],
      providers: [
        { provide: HeroService, useValue: spy }
      ]
    })
    .compileComponents();

    heroServiceSpy = TestBed.get(HeroService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHeroes', () => {
    expect(heroServiceSpy.getHeroes).toHaveBeenCalled();
  });
});
