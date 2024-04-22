import { TestBed } from '@angular/core/testing';
import { PasswordValidator } from './password-validator';

describe('PasswordValidator', () => {
  let service: PasswordValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly validate password requirements', () => {
    const testPasswords = {
      valid: 'TestPassword123!',
      invalid: 'weakpassword',
    };

    const validRequirements = {
      hasUpper: true,
      hasLower: true,
      hasNumber: true,
      hasSpecial: true,
      hasNineChars: true,
      hasNoRepeat: true,
      hasNoSpace: true,
    };

    const invalidRequirements = {
      hasUpper: false,
      hasLower: true,
      hasNumber: false,
      hasSpecial: false,
      hasNineChars: false,
      hasNoRepeat: false,
      hasNoSpace: true,
    };

    const validResult = service.getPasswordRequirements(testPasswords.valid);
    const invalidResult = service.getPasswordRequirements(
      testPasswords.invalid
    );

    expect(validResult).toEqual(validRequirements);
    expect(invalidResult).toEqual(invalidRequirements);
  });
});
