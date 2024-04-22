import { Component, OnInit } from '@angular/core';
import { PasswordValidator } from 'src/app/service/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [PasswordValidator],
})
export class LoginComponent implements OnInit {
  showPasswordRequirements = false;
  email: string = '';
  password: string = '';
  hasLower: boolean = false;
  hasNumber: boolean = false;
  hasSpecial: boolean = false;
  hasNineChars: boolean = false;
  hasNoRepeat: boolean = false;
  hasNoSpace: boolean = false;
  hasUpper: boolean = false;

  constructor(public passwordValidator: PasswordValidator) {}

  ngOnInit() {}

  handleChange(event: any): void {
    const value: string = event.target.value;
    this.password = value;
    this.updatePasswordRequirements();
  }

  handleSubmit(event: any): void {
    event.preventDefault();
    if (this.isPasswordValid()) {
      alert('Senha válida! Você pode fazer login agora.');
      this.resetForm();
    } else {
      alert('Por favor, atenda a todos os requisitos de senha.');
    }
  }

  private updatePasswordRequirements(): void {
    const requirements = this.passwordValidator.getPasswordRequirements(
      this.password
    );
    this.hasLower = requirements.hasLower;
    this.hasNumber = requirements.hasNumber;
    this.hasSpecial = requirements.hasSpecial;
    this.hasNineChars = requirements.hasNineChars;
    this.hasNoRepeat = requirements.hasNoRepeat;
    this.hasNoSpace = requirements.hasNoSpace;
    this.hasUpper = requirements.hasUpper;
  }

  private isPasswordValid(): boolean {
    return (
      this.hasUpper &&
      this.hasLower &&
      this.hasNumber &&
      this.hasSpecial &&
      this.hasNineChars &&
      this.hasNoRepeat &&
      this.hasNoSpace
    );
  }

  private resetForm(): void {
    this.email = '';
    this.password = '';
    this.hasLower = false;
    this.hasNumber = false;
    this.hasSpecial = false;
    this.hasNineChars = false;
    this.hasNoRepeat = false;
    this.hasNoSpace = false;
    this.hasUpper = false;
  }
}
