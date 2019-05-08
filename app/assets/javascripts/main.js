$(() => {
        console.log('Document ready! [main.js]');
        var keyboard = new KeyboardController($('#kcontainer'));

        keyboard.attachToggleButton($('#toggleKeyboard'));
        keyboard.attachTarget($('#textInput'));
        keyboard.attachEnterMethod(function(target) {
            console.log("Enter method triggered...");
            textbuf = target.val();
            $('button#addText').click();
        });
        $('button#addText').on('click', function(handler){
            console.log("Add clicked...");

            $('div#written').append(target.val());
            target.val("");
        });
});
