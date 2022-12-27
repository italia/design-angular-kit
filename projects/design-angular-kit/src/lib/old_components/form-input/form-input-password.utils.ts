import { PasswordStrengthMeterConfig } from "./form-input.component"

/**
 * Classe di utility creata sulla base del seguente sorgente di bootstrap-italia: https://github.com/italia/bootstrap-italia/blob/main/src/js/plugins/input-password.js
 * TODO: Da sostituire una volta che i metodi scoreText, scoreColor, e calculateScore 
 * saranno importabili dalla libreria bootstrap-italia.
 */
export class FormInputPasswordUtils {

  public static readonly DEFAULT_CONFIG =  {
    shortPass: 'Password molto debole',
    badPass: 'Password debole',
    goodPass: 'Password sicura',
    strongPass: 'Password molto sicura',
    enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
    alertCaps: 'CAPS LOCK inserito',
    showText: true,
    minimumLength: 4,
  };

  constructor(private _config: PasswordStrengthMeterConfig) {}

    /**
   * Returns a value between -1 and 100 to score
   * the user's password.
   *
   * @param  string password The password to be checked.
   * @return int
   */
  public calculateScore(password: string) {
    var score = 0

    // empty password
    if (password.trim().length === 0) {
      return -2
    }

    // password < this._config.minimumLength
    if (password.length < this._config.minimumLength) {
      return -1
    }

    // password length
    score += password.length * 4
    score += this._checkRepetition(1, password).length - password.length
    score += this._checkRepetition(2, password).length - password.length
    score += this._checkRepetition(3, password).length - password.length
    score += this._checkRepetition(4, password).length - password.length

    // password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
      score += 5
    }

    // password has at least 2 sybols
    let symbols: RegExp | string = '.*[!,@,#,$,%,^,&,*,?,_,~]';
    symbols = new RegExp('(' + symbols + symbols + ')')
    if (password.match(symbols)) {
      score += 5
    }

    // password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      score += 10
    }

    // password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      score += 15
    }

    // password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
      score += 15
    }

    // password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
      score += 15
    }

    // password is just numbers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
      score -= 10
    }

    if (score > 100) {
      score = 100
    }

    if (score < 0) {
      score = 0
    }

    return score
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
    var res = '',
      repeated = false
    for (var i = 0; i < str.length; i++) {
      repeated = true
      for (var j = 0; j < rLen && j + i + rLen < str.length; j++) {
        repeated = repeated && str.charAt(j + i) === str.charAt(j + i + rLen)
      }
      if (j < rLen) {
        repeated = false
      }
      if (repeated) {
        i += rLen - 1
        repeated = false
      } else {
        res += str.charAt(i)
      }
    }
    return res
  }

  /**
   * Returns strings based on the score given.
   *
   * @param int score Score base.
   * @return string
   */
   public scoreText(score) {

    if (score === -1) {
      return this._config.shortPass;
    } else if (score === -2) {
      return this._config.enterPass;
    }

    score = score < 0 ? 0 : score

    if (score < 26) {
      return this._config.shortPass
    }
    if (score < 51) {
      return this._config.badPass
    }
    if (score < 76) {
      return this._config.goodPass
    }

    return this._config.strongPass
  }

  public scoreColor(score) {
    if (score === -1) {
      return 'danger'
    }
    if (score === -2) {
      return 'muted'
    }

    score = score < 0 ? 0 : score

    if (score < 26) {
      return 'danger'
    }
    if (score < 51) {
      return 'warning'
    }
    if (score < 76) {
      return 'success'
    }

    return 'success'
  }
}