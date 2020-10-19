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
{name:'Erikoーsennsei', from:'青森', hobby:'旅'},
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

Let PlaceList = [

]











