// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [keyboard.js]');
});

let  DOMKeyboard = null;
let  target = null;
let  toggleButton = null;
let  enterMethod = null;

class KeyboardController {

   constructor(keyboard) {
      DOMKeyboard = keyboard;
      target = null;
      toggleButton = null;

      DOMKeyboard.on('click', 'div.key', this.onKeyPressed );


   }

   attachEnterMethod(method) {
      enterMethod = method;
      console.log("Enter method attached...");
   }

   attachTarget(DOMElement) {
      target = DOMElement;
      console.log("Target attached...");
   }
   attachToggleButton(DOMElement) {
      toggleButton = DOMElement;
      toggleButton.on('click', this.toggleKeyboard);
      console.log("Toggle button attached...");
      console.log(toggleButton);
   }
   toggleKeyboard(handler) {
      console.log(toggleButton);
      console.log("= Toggle Keyboard =");
      console.log(DOMKeyboard);
      DOMKeyboard.toggle();
   }

   onKeyPressed(handler) {
      console.log("Pressed: " + handler.currentTarget.innerText);
      if(target) {
          if(handler.currentTarget.innerText == "Enter") {
             // target.val("");
             if(enterMethod) {
               enterMethod(target);
             }
             return;
          }
          var currentText = target.val();
          target.val(currentText + handler.currentTarget.innerText);
      }
   }




}
