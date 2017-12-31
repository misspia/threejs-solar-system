import $ from 'jquery';

class Control {
  constructor(entryElement) {
    this.entryElement = entryElement;
  }
  append(child, parent) {
    $(parent).append(child);
  }
  createButton({label, onClick, className}) {
    const button = $('<button>', {'class': className});
    button.text(label);
    button.click(onClick);
    return button;
  }
}

export default Control;
