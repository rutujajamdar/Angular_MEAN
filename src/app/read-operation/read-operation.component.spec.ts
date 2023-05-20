import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOperationComponent } from './read-operation.component';

describe('ReadOperationComponent', () => {
  let component: ReadOperationComponent;
  let fixture: ComponentFixture<ReadOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
