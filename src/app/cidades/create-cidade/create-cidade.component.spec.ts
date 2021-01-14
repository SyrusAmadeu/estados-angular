import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCidadeComponent } from './create-cidade.component';

describe('CreateCidadeComponent', () => {
  let component: CreateCidadeComponent;
  let fixture: ComponentFixture<CreateCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
