export class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById('numberOne');
    this.numberTwoInput = document.getElementById('numberTwo');
    this.addValuesButton = document.getElementById('addValues');
    this.resultDiv = document.getElementById('result');
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(srt) {
    this.resultDiv.innerText = srt;
  }

  onClick(cb) {
    this.addValuesButton.addEventListener('click', cb);
  }
}
