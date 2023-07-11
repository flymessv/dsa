setTimeout(() => {
console.log('Loading...');
}, 300);
setTimeout(() => {
console.log('Processing...');
}, 900);
setTimeout(() =>{
console.log('[Владимир] - bot activated!');
}, 1200);
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
const bot_owner = 181184435;
const {Keyboard} = require('vk-io');
let giving = false;
var wall_to_send = '';
//--------------КАСТЕТЫ--------------------//
const kastets = [ 
{
name: "Кастет 1lvl", 
id: 1, 
cost: 35
}, 
{
name: "Кастет 2lvl", 
id: 2, 
cost: 50
}, 
{
name: "Кастет 3lvl", 
id: 3, 
cost: 80
} 
];
const kastetsups = [ 
{
name: "Кастет 2lvl", 
id: 2, 
cost: 15
}, 
{
name: "Кастет 3lvl", 
id: 3, 
cost: 45
}
];
const kastetssups = [
{
name: "Кастет 3lvl",
id: 3,
cost: 30
}
];

//----------------МЕЧИ--------------------//
const mechs = [ 
{
name: "Меч 1lvl", 
id: 1, 
cost: 50
}, 
{
name: "Меч 2lvl", 
id: 2, 
cost: 80
}, 
{
name: "Меч 3lvl", 
id: 3, 
cost: 110
} 
];
const mechsups = [ 
{
name: "Меч 2lvl", 
id: 2, 
cost: 30
}, 
{
name: "Меч 3lvl", 
id: 3, 
cost: 60
}
];
const mechssups = [
{
name: "Меч 3lvl",
id: 3,
cost: 30
}
];
//----------------САБЛИ--------------------//
const sablyas = [ 
{
name: "Сабля 1lvl", 
id: 1, 
cost: 80
}, 
{
name: "Сабля 2lvl", 
id: 2, 
cost: 110
}, 
{
name: "Сабля 3lvl", 
id: 3, 
cost: 150
} 
];
const sablyasups = [ 
{
name: "Сабля 2lvl", 
id: 2, 
cost: 30
}, 
{
name: "Сабля 3lvl", 
id: 3, 
cost: 70
}
];
const sablyassups = [
{
name: "Сабля 3lvl",
id: 3,
cost: 40
}
];

const utils = {
sp: (int) => {
int = int.toString();
return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
},
rn: (int, fixed) => {
if (int === null) return null;
if (int === 0) return '0';
fixed = (!fixed || fixed < 0) ? 0 : fixed;
let b = (int).toPrecision(2).split('e'),
k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
d = c < 0 ? c : Math.abs(c),
e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

e = e.replace(/e/g, '');
e = e.replace(/\+/g, '');
e = e.replace(/Infinity/g, 'ДОХЕРА');

return e;
},
gi: (int) => {
int = int.toString();

let text = ``;
for (let i = 0; i < int.length; i++)
{
text += `${int[i]}&#8419;`;
}

return text;
},
decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
random: (x, y) => {
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
},
pick: (array) => {
return array[utils.random(array.length - 1)];
},
time: () => {
return parseInt(new Date().getTime()/1000)
}
}

let btc = 6000;

let users = require('./users.json');
let buttons = [];

setTimeout(async () => {
const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

if(!rq.ticker) return;
if(!rq.ticker.price) return;

btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

if(!rq.ticker) return;
if(!rq.ticker.price) return;

btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
await saveUsers();
console.log('saved');
}, 30000);

async function saveUsers()
{

require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
return true;
}


vk.setOptions({ token: 'b11dcff15f12a55b42178ebcf420e2de9fac9a20c809ac88e5592de0c8d521b8a9d7fc10eb3322a29ec65', pollingGroupId: 181184435 });
const { updates, snippets } = vk;
updates.startPolling();
updates.on('message', async (message) => {
if(Number(message.senderId) <= 0) return;
if(/\[club181184435\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club181184435\|(.*)\]/ig, '').trim();

if(!users.find(x=> x.id === message.senderId))
{
const [user_info] = await vk.api.users.get({ user_id: message.senderId });
const date = new Date();

users.push({
id: message.senderId,
idtwo: message.Id,
uid: users.length,
admin: false,
balance: 0,
backto: 1,
xod: 0,
xodLOCK: 0,
heal: 6500,
biz: 0,
dont: 0,
exp: 0,
blockedsearch: false,
blockedsearchID: 0,
lvl: 0,
start: 0,
gold: 0,
biz: 0,
regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
ban: false,
tag: user_info.first_name,
notifications: true,
damageNima: 0,
areoReturn: 0,
CanSearch: 0,
SearchBan: false,
helpTrue: false,
Decency: 5000,
DecencyBan: false,
DecencyCounter: 1,
Deistvie: false,
now: false,
Coins: 0,
misc: {
changenickname: 0,
kastet: 0,
mech: 0,
sablya: 0, 
ready: 0,
vizov: 0,
chest: 0,
whereiscrit: 0,
firstnameS: user_info.first_name,
oskolki: 0,
OPENCHEST: 0,
CHESTOPEN: 0,
change: 0,
nasmeshka: 0,
nasmeshkaLOCK: 0,
nasmeshkaNotice: false,
weapon: 'кулак',
bannick: false,
yvedomFORshop: 0,
shield: 0,
magicTime: 0,
magicBlood: 0,
goMaticTime: 0,
goMagicBlood: 0,
goMagicTimeTwo: 0,
goMagicBloodTwo: 0,
goDamageMagicTime: 0,
goDamageMagicTBlood: 0,
meta: 0,
vamp: 0,
areo: 0,
nima: 0,
block: 0,
metaRest: 0,
metaUse: 0,
nimaUse: 0,
nimaSCREAM: 0,
blockUse: 0,
nimaRest: 0,
areoReady: 0,
createAreo: 0,
areoAttackReadyForShield: 0,
areoShield: 0,
ability: 0,
Dark: 0,
nimaSCREAMrest: 0,
DarkRest: 0,
nimaCanBeUsed: 0,
nimaHaunt: 0,
nimaHauntRest: 0,
areoRest: 0,
nimaUseHaunt: 0,
nimaOneTime: 1,
areoOneTime: 1,
areoOneTime2: 1,
Dark2: 0,
bloodTime: false,
AreoChanse: 0,
areoXod: 0,
},
perki: {
OnePerk: 0,
TwoPerk: 0,
ThreePerk: 0,
FourPerk: 0,
OnePerkLvl: 0,
TwoPerkLvl: 0,
ThreePerkLvl: 0,
FourPerkLvl: 0,

},
level: {
level2: 100,
level3: 170,
level4: 240,
level5: 310,
level6: 390,
level7: 470,
level8: 530,
level9: 640,
level10: 740,
},
friendsList:{
friend: 0,
friendName: ``,
friendID: ``,
},
pve: {
completeOFpve: false,
FIRSTtime: true,
ofcourseinformation: false,
VisitWitch: false,
FirstLocationOfWitch: false,
winOfBOSS1: 0,
winOfBOSS2: 0,
winOfBOSS3: 0,
winOfBOSS4: 0,
winofBOSS5: 0,
winofBOSS56: 0,
winofBOSS57: 0,
winofBOSS58: 0,
winofBOSS59: 0,
helpWitch: 0,
vstrecha: 0,
witchfly: false,
twodemons: 1,
twodemonsattack: 1,
training: 1,
heal: 0,
WINdem1: 0,
WINdem2: 0,
lock: false,
whereiam: 0,
hpDEMON1: 0,
hpDEMON2: 0,
first: true,
twodemswerewon: false,
twodemswerewonnotice: false
}
});
}
message.user = users.find(x=> x.id === message.senderId);
const bot = (text, params) => {
return message.send(`[gr8str8some1-helper]: \n ${text}`, params);
}

if(message.user.ban)return message.send(`Вы забанены.`)

const command = commands.find(x=> x[0].test(message.text));
if(!command) return;
message.args = message.text.match(command[0]);
await command[1](message, bot);
console.log(`Executed: ${message.user.tag}, ${message.user.uid}: ${message.text}`)

});
const cmd = {
hear: (p, f) => {
commands.push([p, f]);
}
}

























setInterval(async () => {
var date = new Date();
current_date = 23; //сменить[1] (23)
message_user = users.find(x=>x.uid === 4)//сменить[2] (4)
if ((date.getHours() == current_date) && (message_user.dont !== 1)) {
    sended()
    message_user.dont = 1;
}
//vk.api.messages.send({ user_id: 266582325, message: `${date.getHours()}`}) 
}, 1000);

function sended(){
    let id = 176695281; //сменить[3] (176695281) 
    let date = new Date();
    vk.api.messages.send({ user_id: id, message: `&#12288;`,
        keyboard:JSON.stringify(
        {
        "one_time": false,
        "buttons": [   
        ],
        }) 
    })
    vk.api.messages.send({ user_id: id, message: `[gr8str8some1-helper]: \n Здравствуйте, Анастасия! \n Я - помощник Владимира Щёголева! \n Я - gr8str8some1-helper. \n Соглашусь, мой хозяин не блещет фантазией.\n Но я робот и не могу возмущаться. Я говорю и делаю лишь то, что хочет от меня хозяин. \n Текущая дата: \n ${date} \n Так как данная дата совпадает с тем, что в меня запрограммировано, - я отправляю вам это сообщение-поздравление с Новым Годом! `,
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `Далее`,
},
"color": `positive`
},
],    
],
}) 
})
}


//-------------------------------------------[Далее]-------------------------------------------------------//
cmd.hear(/^(?:Далее)$/i, async (message, bot) => {
	return bot(`Мой хозяин для вас кое-что подготовил. \n Это что-то он занёс в моё сознание. \n Так как вы - это не я, а я - это не вы, то вы не можете залезть в моё созанание. \n Искусственно созданное сознание, разумеется. \n Но, я же искусственный интеллект, я всё могу. \n Не переживайте, я уже сделал необходимые расчёты. \n Я сгенерирую для вас ссылку, чтобы вы могли попасть внутрь моего сознания. \n Попрошу открыть данную ссылку только через компьютер, иначе половина функций будет недоступна, так как мобильные устройства не поддерживают мои технологии. \n Дайте мне понять командой «Готова», что я могу приступать к генерации.`,
    {
keyboard:JSON.stringify(
{
"one_time": false,
"inline": true,
"buttons": [
[
{
"action":{
"type": "text",
"payload": "{\"button\": \"6\"}",
"label": `Готова`,
},
"color": `positive`
},
],    
],
})
})

})



//-------------------------------------------[Готова]-------------------------------------------------------//
cmd.hear(/^(?:Готова)$/i, async (message, bot) => {
let string_website = 'https://cxsd-n1s5vdv5e-flymessv.vercel.app'
    var flag = true; var count_current_time = 10; var string_dot = '.'
        setInterval(async () => {
            if (flag) await bot(`Генерирую ссылку${string_dot} \n Осталось ${count_current_time} секунд.`);
            count_current_time--;
                string_dot == '...' ? string_dot = '.' : 
                    string_dot == '..' ? string_dot = '...' : 
                        string_dot == '.' ? string_dot = '..' : 
                            string_dot = string_dot;
            if ((flag) && (count_current_time == 0)) {
                setTimeout(async () => {
                    await bot(`Ссылка сгенерирована! \n Добро пожаловать в моё сознание! \n ${string_website}`,
                        {
                        keyboard:JSON.stringify(
                        {
                        "one_time": false,
                        "inline": false,
                        "buttons": [
                        [
                        {
                        "action":{
                        "type": "text",
                        "payload": "{\"button\": \"6\"}",
                        "label": `Спасибо!`,
                        },
                        "color": `positive`
                        },
                        ],
                        ],
                        })
                        })
                }, 1000); 
            }
            if (count_current_time == 0) {
                flag = false;
            }
        }, 1000); 

})

//-------------------------------------------[Спасибо!]-------------------------------------------------------//
cmd.hear(/^(?:Спасибо!)$/i, async (message, bot) => {
    return bot(`Всегда пожалуйста! Не заблудитесь по дороге.`,
{
keyboard:JSON.stringify(
{
"one_time": false,
"buttons": [
],
})
})

})