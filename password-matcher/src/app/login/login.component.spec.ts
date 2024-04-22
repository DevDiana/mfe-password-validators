import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { PasswordValidator } from 'src/app/service/password-validator';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let passwordValidator: PasswordValidator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [PasswordValidator],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    passwordValidator = TestBed.inject(PasswordValidator);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle form submission with valid password', () => {
    const mockEvent = jasmine.createSpyObj('event', ['preventDefault']);
    spyOn(window, 'alert');
    component.hasUpper = true;
    component.hasLower = true;
    component.hasNumber = true;
    component.hasSpecial = true;
    component.hasNineChars = true;
    component.hasNoRepeat = true;
    component.hasNoSpace = true;
    component.handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Senha válida! Você pode fazer login agora.'
    );
  });

  it('should handle form submission with invalid password', () => {
    const mockEvent = jasmine.createSpyObj('event', ['preventDefault']);
    spyOn(window, 'alert');

    component.hasUpper = false;
    component.hasLower = false;
    component.hasNumber = false;
    component.hasSpecial = false;
    component.hasNineChars = false;
    component.hasNoRepeat = false;
    component.hasNoSpace = false;
    component.handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Por favor, atenda a todos os requisitos de senha.'
    );
  });
});
