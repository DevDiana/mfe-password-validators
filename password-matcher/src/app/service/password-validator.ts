import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidator {
  private requirements: { [key: string]: RegExp } = {
    hasUpper: /[A-Z]/,
    hasLower: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpecial: /[!@#$%^&*()-+]/,
    hasNineChars: /^.{9,}$/,
    hasNoSpace: /^\S*$/,
  };

  constructor() {}

  getPasswordRequirements(password: string): any {
    return {
      hasUpper: this.hasUpper(password),
      hasLower: this.hasLower(password),
      hasNumber: this.hasNumber(password),
      hasSpecial: this.hasSpecial(password),
      hasNineChars: this.hasNineChars(password),
      hasNoRepeat: this.hasNoRepeat(password),
      hasNoSpace: this.hasNoSpace(password),
    };
  }

  private hasUpper(value: string): boolean {
    return this.requirements['hasUpper'].test(value);
  }

  private hasLower(value: string): boolean {
    return this.requirements['hasLower'].test(value);
  }

  private hasNumber(value: string): boolean {
    return this.requirements['hasNumber'].test(value);
  }

  private hasSpecial(value: string): boolean {
    return this.requirements['hasSpecial'].test(value);
  }

  private hasNineChars(value: string): boolean {
    return this.requirements['hasNineChars'].test(value);
  }

  private hasNoSpace(value: string): boolean {
    return this.requirements['hasNoSpace'].test(value);
  }

  private hasNoRepeat(value: string): boolean {
    const charMap: { [key: string]: boolean } = {};

    for (let char of value) {
      if (charMap[char]) {
        return false;
      }
      charMap[char] = true;
    }

    return true;
  }
}
