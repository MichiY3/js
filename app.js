console.log('Hello');
console.log('Hola');
console.log('konnichiwa');
console.log('セブ島'+ '');
console.log(5 + 8); //足算
console.log(4 - 2);//
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);


// 数字の前後にスペースを開けるの推奨
console.log('①5たす８＝' + String(5 + 8));



//変数
let country = 'japan';
console.log(country);
country = 'Philippines';
console.log(country);

let job = 'engineer'
console.log(job)
job='travel agent'
console.log(`私の仕事は${job}です`);

let flower_list = ['rose','margaret','lily','sunflower','dahlia','tulip'];
console.log(flower_list);
console.log(flower_list[3]);

let applications =['LINE','Facebook','Twitter'];
console.log(applications);
applications.push("Instagram");
console.log(applications);
console.log(applications[3]);
console.log(applications[0]);

let user = { age : 38, blood_type: 'A'};
console.log(user)
console.log(user.blood_type);

let CapitalCities ={Japan:'Tokyo',Phillipines:'Manila'};
console.log(CapitalCities);
CapitalCities.America='Washington';
console.log(CapitalCities);
console.log(CapitalCities.America);
console.log(CapitalCities['America']);


// HOMEWORK
// / クラスのみんなの名簿を2次元配列で作ってきましょう
// // 配列の中に、連想配列のかたちです
// リストの0番目の人の名前をconsoleで表示しましょう
// リストの3番めの人の出身地をconsoleで表示しましょう
// リストの4番目の人の趣味をconsoleで表示しましょう

let StudentList = [
{name:'Ota-san', from:'宮古島', hobby:'ゲームとギター'},
{name:'Shimajiri-san', from:'浦添',hobby:'ゴルフ'},
{name:'Maemoto-san', from:'北谷',hobby:'バスケット'},
{name:'Takushi-san', from:'うるま市',hobby:'サッカーとファッション'},
{name:'Igei-san', from:'沖縄',hobby:'旅'},
{name:'Erikoーsennsei', from:'青森',hobby:'食べ歩きと旅'},
{name:'Seedくん', from:'セブ島',hobby:'サーフィン'}
];

console.log(StudentList[0].name);
console.log(StudentList[3].from);
console.log(StudentList[4].hobby);
console.log(StudentList[0].hobby);
console.log(StudentList[0]['hobby']);

// ５次元配列　入れ子５個！


// 条件分岐
	// 　比較演算子

// 	/練習問題
// 変数weightに任意の数字を代入してください。
// weightが200以上の場合はヘビー級
// weightが115以上、118以下の場合はバンタム級
// それ以外の場合はその他の階級
// とconsoleに表示してください。

let weight = 119;

if(weight >= 200){
	console.log('ヘビー級');
}else if(weight >= 115 && weight <= 118 ){
	console.log('バンタム級');
}else{
	console.log('その他の階級');
}



// switch文
// 練習問題
// 変数greetingに任意の文字列を代入してください。
// greetingがおはようの場合は日本語
// greetingがgood morningの場合は英語 
// それ以外の場合は?
// とconsoleに表示してください。

let greeting ='buenos dias';

switch(greeting){
	case'おはよう':
		console.log('日本語');
		break; 
			// ここで終わりの印、必ずかく
	case'good morning':
		console.log('english');
		break;
	default:
		console.log('?');
		break;
}



// 繰り返し

/*
	1から10までの数字を表示するプログラム
	変数iに1を代入する(初期化式)
	iが10以下の間だけ繰り返す(条件式)
	iを1回ごとに+1する(変化式)
*/
for (let i = 1; i <= 10; i++) {
	console.log('繰り返しますよ');
    console.log(i);
}

// 練習問題
// 以下の条件にあうfor文を書いてください。
// 初期化式で変数iに2を代入する
// iが20以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する
for (let i = 2; i <= 20; i++){
	console.log(i);
}

// 練習問題
// 以下の条件にあうwhile文を書いてください。
// 変数kに2を代入する
// kが20以下の間繰り返す
// 1回ごとにkを1増やす
// 繰り返しのたびにkをconsoleに表示する

for (let k = 2; k <= 20; k++){
	console.log(k);
}


// for文を使って下記リストのname部分をconsoleに表示
// ヒント：forで数が変わるiは、○番目の指定にもつかえます。

let StudentList2 = [
{name:'Ota-san', from:'宮古島', hobby:'ゲームとギター'},
{name:'Shimajiri-san', from:'浦添',hobby:'ゴルフ'},
{name:'Maemoto-san', from:'北谷',hobby:'バスケット'},
{name:'Takushi-san', from:'うるま市',hobby:'サッカーとファッション'},
{name:'Igei-san', from:'沖縄',hobby:'旅'},
{name:'Erikoーsennsei', from:'青森',hobby:'食べ歩きと旅'},
{name:'Seedくん', from:'セブ島',hobby:'サーフィン'}
];

for (let i=0; i <=5; i++){
	 console.log(StudentList2[i].name);
}

// for (let i = StudentList2.name; i <= 7; i++){
// 	console.log(i);
// }

// console.log(StudentList[0].name);
// console.log(StudentList[1].name);
// console.log(StudentList[2].name);
// console.log(StudentList[3].name);
// console.log(StudentList[4].name);
// console.log(StudentList[5].name);
// console.log(StudentList[6].name);



// 繰り返しの中断、スキップ

//1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 練習問題

// 以下の条件にあうfor文を書いてください。
// 初期化式で変数iに1を代入する
// iが50以下の間繰り返す 
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する
// ただし、iが5の倍数でない場合は表示しない。


for( let i = 1; i <= 50; i++){
	if (i % 5 === 0){
	console.log(i);
	}else{
		continue;
	}
}

// ランダム変数
console.log('ランダム変数');
var random = Math.floor( Math.random() * 11 );
console.log( random );

var random = Math.floor(Math.random() * 3);
let omikuji =[
'大吉',
'中吉',
'小吉'];
console.log(omikuji[random]);







