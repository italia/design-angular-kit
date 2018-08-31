import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

const options = {
  shortPass: 'password troppo debole',
  badPass: 'password debole',
  goodPass: 'password sicura',
  strongPass: 'password molto sicura',
  enterPass: 'inserisci almeno 8 caratteri e una lettera maiuscola',
  showText: true,
  minimumLength: 8
};

@Component({
  selector: 'it-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css']
})
export class PasswordStrengthMeterComponent implements OnChanges {
  private _score = -1;

  @Input()
  get password(): string { return this._password; }
  set password(value: string) { this._password = value; }
  private _password;

  scoreValue() {
    return this._score;
  }

  scoreColor() {
    let score = this._score;
    if (score === -1) {
      return 'danger';
    }
    if (score === -2) {
      return 'muted';
    }

    score = score < 0 ? 0 : score;

    if (score < 26) {
      return 'danger';
    }
    if (score < 51) {
      return 'warning';
    }
    if (score < 76) {
      return 'success';
    }

    return 'success';
  }

  /**
   * Returns strings based on the score given.
   *
   * @param int score Score base.
   * @return string
   */
  scoreText() {
    let score = this._score;
    if (this.password.length < options.minimumLength) {
      return options.enterPass;
    }

    if (score === -1) {
      return options.shortPass;
    }

    score = score < 0 ? 0 : score;

    if (score < 26) {
      return options.shortPass;
    }
    if (score < 51) {
      return options.badPass;
    }
    if (score < 76) {
      return options.goodPass;
    }

    return options.strongPass;
  }

  progressBarClass() {
    return `progress-bar bg-${this.scoreColor()}`;
  }

  pswTextClass() {
    return `psw-text text-${this.scoreColor()}`;
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.password) {
      this._score = this._calculateScore();
    }
  }

    /**
   * Returns a value between -1 and 100 to score
   * the user's password.
   *
   * @param  string password The password to be checked.
   * @return int
   */
  private _calculateScore() {
    const password = this.password;
    let score = 0;

    // password < options.minimumLength
    if (password.length < options.minimumLength) {
      return -1;
    }

    // password length
    score += password.length * 4;
    score += this._checkRepetition(1, password).length - password.length;
    score += this._checkRepetition(2, password).length - password.length;
    score += this._checkRepetition(3, password).length - password.length;
    score += this._checkRepetition(4, password).length - password.length;

    // password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
      score += 5;
    }

    // password has at least 2 sybols
    let symbols: string | RegExp = '.*[!,@,#,$,%,^,&,*,?,_,~]';
    symbols = new RegExp('(' + symbols + symbols + ')');
    if (password.match(symbols)) {
      score += 5;
    }

    // password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      score += 10;
    }

    // password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      score += 15;
    }

    // password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
      score += 15;
    }

    // password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
      score += 15;
    }

    // password is just numbers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
      score -= 10;
    }

    if (score > 100) {
      score = 100;
    }

    if (score < 0) {
      score = 0;
    }

    return score;
  }

  /**
   * Checks for repetition of characters in
   * a string
   *
   * @param int rLen Repetition length.
   * @param string str The string to be checked.
   * @return string
   */
  private _checkRepetition(rLen, str) {
    let res = '', repeated = false;
    let i, j;
    for (i = 0; i < str.length; i++) {
      repeated = true;
      for (j = 0; j < rLen && (j + i + rLen) < str.length; j++) {
        repeated = repeated && (str.charAt(j + i) === str.charAt(j + i + rLen));
      }
      if (j < rLen) {
        repeated = false;
      }
      if (repeated) {
        i += rLen - 1;
        repeated = false;
      } else {
        res += str.charAt(i);
      }
    }
    return res;
  }

}
