import $ from 'jquery';

class Control {
  constructor(entryElement) {
    this.entryElement = entryElement;
    this.buttons = [];
  }
  append(element) {
    $(this.entryElement).append(element);
  }
  appendButtons() {
    this.buttons.forEach(button => {
      this.append(button);
    })
  }
  createButton({label, onClick, className}) {
    const button = $('<button>', {'class': className});
    button.text(label);
    button.click(onClick);
    this.buttons.push(button);
  }
}

export default Control;
