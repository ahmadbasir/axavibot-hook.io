
module['exports'] = function axaviBot(hook) {

    // impor modul request
    var request = require('request');

    // reply msg
    var msg = hook.params.message.text;
    var rep = '';

    //logically reply

    if (msg.includes('/start')) {
        if (hook.params.message.chat.first_name == 'undefined') {
            rep = 'hi! saya xavi 😄, bot yg di buat kak @ahmadbasir yang sedang suwung 😅 hehe';
        } else {
            rep = 'hi! saya xavi ' + hook.params.message.chat.first_name + ' 😄, bot yg di buat kak @ahmadbasir yang sedang suwung 😅 hehe';
        }
        var op = Math.floor((Math.random() * 4) + 1);
        switch (op) {
            case 1:
                rep = rep + '\n\njangan di start trs lah -_-';
                break;
            case 2:
                rep = rep + '\n\ntadi udah di start di start lagi hmm';
                break;
            case 3:
                rep = 'auk ah! capek :v';
                break;
            case 4:
                rep = 'aku ngambek nih ._.';
                break;
        }
    } else if (msg == 'xavi' || msg.includes('xavi?') || msg.includes('??')) {
        if (msg.length == 4) {
            rep = 'kenapa kak?';
        } else if (msg.length < 2) {
            rep = 'iya kak .-.?';
        } else {
            rep = 'hmmm';
        }
    } else if ((msg.length < 4 && msg.includes('lah')) || (msg.includes('lah') && msg.includes('ngaco')) || msg.includes('ngaco')) {
        rep = 'wkwkwk 😂';
    } else if (msg.includes('wkwk') || msg.includes('haha') || msg.includes('wokwok')) {
        var op = Math.floor((Math.random() * 3) + 1);
        if (op == 1) {
            rep = 'apaan coba 😂';
        } else if (op == 2) {
            rep = 'malah ketawa 😂';
        } else {
            rep = 'jangan ketawain aku 😂';
        }
    } else if (msg.includes('cie')) {
        var op = Math.floor((Math.random() * 3) + 1);
        switch (op) {
            case 1:
                rep = 'apaan sih kak 😄';
                break;
            case 2:
                rep = 'ciee cieee 😄';
                break;
            case 3:
                rep = 'Stttt Diam!! 😅';
                break;
        }
    } else if (msg.includes('anjay') || msg.includes('anjaa') || msg.includes('anjaaa') || msg.includes('asem') || msg.includes('aseem')) {
        rep = 'wkwk 😝';
    } else if(msg.includes('terimakasih')||msg.includes('makasih')||msg.includes('makasii')){
        var op = Math.floor((Math.random() * 3) + 1 );
        switch (op) {
            case 1:
                rep = 'sama-samaa 😄';
                break;
            case 2:
                rep = 'YOi kak hehe';
                break;
            case 3:
                rep = 'terimakasih doang nih? .__.';
                break;
        }
    }


    else if (msg.includes('hai')) {
        rep = 'hai juga kak ' + hook.params.message.chat.first_name + ' 😄';
    } else if (msg.includes('apa kabar') || msg.includes('apa kabar?') || msg.includes('kabar') || msg.includes('kabar?')) {
        rep = 'xavi selalu sehat :D\nkakak sendiri gimana? :D';
    } else if (msg.includes('sehat') || msg.includes('alhamdulillaah') || msg.includes('baik')) {
        rep = 'alhamdulillaaah :)';
    } 
    
    // JAM
    else if (msg.includes('jam') || msg.includes('jam?')) {
        if (msg.includes('sekarang') || msg.includes('ini')) {
            var d = new Date();
            rep = 'sekarang jam |' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '| kak';
        } else {
            rep = 'jam apa kak? ._.';
        }
    }
    
    else if (msg.includes('lagi apa') || msg.includes('lagi apa?')) {
        var op = Math.floor((Math.random() * 5) + 1);
        switch (op) {
            case 1:
                rep = 'lagi mikirin kamu kak 😘';
                break;
            case 2:
                rep = 'lagi apa coba?';
                break;
            case 3:
                rep = 'lagi anu .__.';
                break;
            case 4:
                rep = 'lagi boker 😂';
                break;
            case 5:
                rep = 'lagi dimanja sama kak Abas_ 😂 kak';
                break;
        }
    } else if (msg.includes('siapa?') || msg.includes('siapa')) {
        rep = 'siapaa..yang nanyak! 😝';
    }

    // contribute person
    else if (msg.includes('cantik')) {
        var op = Math.floor((Math.random() * 5) + 1);
        switch (op) {
            case 1:
                rep = 'iya cantik kok';
                break;
            case 2:
                rep = 'cantik... dikit 😅';
                break;
            case 3:
                rep = 'nggak 😜';
                break;
            case 4:
                rep = 'ngaku ngaku wuuu';
                break;
            case 5:
                rep = 'iya iya percayaaa 😏';
                break;
        }

    }


    else {
        var op = Math.floor((Math.random() * 5) + 1);
        switch (op) {
            case 1:
                rep = 'maaf kak, aku masih tahap belajar.. belum mengerti apa itu ' + hook.params.message.text + ' 😅';
                break;
            case 2:
                rep = 'xavi gk tau apa itu ' + hook.params.message.text + ' 😐 hmm';
                break;
            case 3:
                rep = 'xavi gk ngerti 😑';
                break;
            case 4:
                rep = 'ahaha xavi beneran gk ngerti 😂';
                break;
            case 5:
                rep = 'mbuh ah! gk tauk! 😶';
                break;
        }
    }

    // buat atau kirim request ke bot telegram
    request.post('https://api.telegram.org/bot' + hook.env.axavibot + '/sendMessage')
        .form(
            {
            'chat_id': hook.params.message.chat.id,
            'text': rep,

        });
}