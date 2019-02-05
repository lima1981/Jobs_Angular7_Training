import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-reactive-edit',
  templateUrl: './hero-reactive-edit.component.html',
  styleUrls: ['./hero-reactive-edit.component.scss']
})
export class HeroReactiveEditComponent implements OnInit {

  superPowers = ['Flying', 'x-ray', 'really smart'];

  heroForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private heroSvc: HeroService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();
    this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.heroSvc.getHero(id)),
      ).subscribe(hero => {

        this.setAddresses(hero.addresses);
        this.heroForm.patchValue(hero);
        } );
  }

  initForm() {
    this.heroForm = this.formBuilder.group(
      {
         id: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        name: ['', Validators.required],
        altEgo: ['fred', Validators.required],
        superPower: ['', Validators.required],
        addresses: this.formBuilder.array([])
      }
    );
  }

  setAddresses(addresses: string[]) {
    if (!addresses) {
      return;
    }
    const addressControls = addresses.map(a => this.formBuilder.group(
      {
        address: []
      }
    ));
    const formArray = this.formBuilder.array(addressControls);
    this.heroForm.setControl('addresses', formArray);
  }

  get addresses(): FormArray {
    return this.heroForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.formBuilder.group({
      address: ['']
    }));
  }

  onSubmit() {
    if (!this.heroForm.valid) {
      return;
    }

    const hero = this.heroForm.value;
    this.heroSvc.saveHero(hero).subscribe(
      result => this.router.navigateByUrl('/')
    );
  }
}
