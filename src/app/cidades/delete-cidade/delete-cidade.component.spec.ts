import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCidadeComponent } from './delete-cidade.component';

describe('DeleteCidadeComponent', () => {
  let component: DeleteCidadeComponent;
  let fixture: ComponentFixture<DeleteCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
