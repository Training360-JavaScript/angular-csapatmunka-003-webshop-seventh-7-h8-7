import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProductService {

  product: Product = new Product();
  apiUrl: string = environment.apiUrl;

  /* list: Product[] = [
    {
      "id": 1,
      "catId": "cat-1",
      "name": "Természetes gyulladás - csökkentők",
      "author": "Lizzie Streit",
      "description":
        "Mindegy, hogy vegán, ketogén, kis szénhidráttartalmú, kis glikémiás indexű (GI) étrendet vagy más speciális diétát követünk, esetleg csak több egészséges élelmiszert szeretnénk beilleszteni a szokásos étrendünkbe, ez a könyv nagyszerű segítség, hogy megtegyük a kezdő lépéseket az egészséges életmódhoz.",
      "image": "../../assets/img/lifestyle/1.jpg",
      "price": 4560,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 2,
      "catId": "cat-1",
      "name": "A tudatos család",
      "author": "Dr. Shefali Tsabary",
      "description":
        "Elérkezett egy új kezdet ideje, ahol a család már nem bilincs, ami gúzsba köt, hanem a föld, amelyből virágba szökkenünk, és az ég, ahol repülni tanulunk.Minden szülő nagyra törő álmokat dédelget a gyermekeivel kapcsolatban, de sok esetben ezek a remények irreális elvárásokká változnak. Mindez általában nagy nyomásként nehezedik a gyermekre, valódi károkat okozva és akadályoztatva a gyermek fejlődését.",
      "image": "../../assets/img/lifestyle/2.jpg",
      "price": 6500,
      "stock": 10,
      "featured": true,
      "active": true
    },
    {
      "id": 3,
      "catId": "cat-1",
      "name": "Az energiád kulcsa",
      "author": "Natacha Calestrémé",
      "description":
        "Natacha Calestrémé újságíró és rendező. Az egészség és a környezet szakértőjeként energiaadókkal, gyógyítókkal, médiumokkal és sámánokkal készített interjúkat. Számos kísérlet után ültette át agyakorlatba a szokatlan terapeuták technikáit, és megváltozott az élete.",
      "image": "../../assets/img/lifestyle/3.jpg",
      "price": 3990,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 4,
      "catId": "cat-1",
      "name": "Vagina biblia",
      "author": "Dr. Jen Gunter",
      "description":
        "Rengeteg kérdés, ezernyi meggyőzőnek tűnő, zavaros, ellentmondásos tévhit! Az áltudomány, kattintásvadász címek és a celebek által ránk tukmált termékek korszakában könnyű megzavarodni, és bedőlni a divatos hiedelmeknek. Hiánypótló könyvében az óriási népszerűségnek és közbizalomnak örvendő Jen Gunter szülész-nőgyógyász eloszlatja a kártékony mítoszokat, és a nők kezébe adja nemi szervük egészségét",
      "image": "../../assets/img/lifestyle/4.jpg",
      "price": 6500,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 5,
      "catId": "cat-1",
      "name": "Nemet mondok a hulladékra",
      "author": "Harriet Dyer",
      "description":
        "Praktikus könyvünk tanácsokat ad, hogyan csökkentsük a hulladék mennyiségét. Ötletekkel szolgál, miképp kerüljük el a felesleges csomagolást, hogyan hasznosítsuk újra régi háztartási cikkeinket, és hogyan csökkentsük nagy mértékben az élelmiszer-pazarlást.",
      "image": "../../assets/img/lifestyle/5.jpg",
      "price": 2300,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 6,
      "catId": "cat-1",
      "name": "Túl a renden",
      "author": "Jordan B. Peterson",
      "description":
        "Ez a tizenkét újabb szabály segíti az olvasót egy bátrabb, igazabb élethez, amelyben több értelmet fog találni. Az élet értelme nem más, mint az ismert dolgainkon való túllépés, nem más, mint az örökké változó világhoz való alkalmazkodás.",
      "image": "../../assets/img/lifestyle/6.jpg",
      "price": 3450,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 7,
      "catId": "cat-1",
      "name": "Szeretkezés fogságban",
      "author": "Esther Perel",
      "description":
        "Arra invitálja olvasóit, hogy nézzenek szembe a megszokás és a szexuális vágy elkerülhetetlen egységével és összefüggéseivel, és azt is eláruja, hogyan tudják megtartani (vagy újra felszítani) a vágy erejét a hosszútávú kapcsolatokban élő párok",
      "image": "../../assets/img/lifestyle/7.jpg",
      "price": 4690,
      "stock": 4,
      "featured": false,
      "active": true
    },
    {
      "id": 8,
      "catId": "cat-1",
      "name": "A jóga tudománya",
      "author": "Ann Swanson",
      "description":
        "Akár kezdők, akár gyakorlottabbak vagyunk, A jóga tudománya segít a tudatos és eredményes jógagyakorlásban, a jóga anatómiájának megértésében és a szükséges technikai tudás fejlesztésében, hogy megfelelően végezhessük a gyakorlatokat, és ezáltal tökéletes harmóniába kerülhessen egymással a testünk és az elménk.",
      "image": "../../assets/img/lifestyle/8.jpg",
      "price": 1990,
      "stock": 13,
      "featured": true,
      "active": true
    },
    {
      "id": 9,
      "catId": "cat-1",
      "name": "Macskabölcsesség",
      "author": "Stéphane Garnier",
      "description":
        "A francia Stéphane Garnier hosszan tanulmányozta saját négylábú kedvencét, és az írót lenyűgözte a macskájából áradó elegancia és szabadságvágy. Ziggy, a lassan 15 éves macskaúrfi ihlette a Macskabölcsességet, az életmódtanácsokat tartalmazó, könnyed, humoros, de lényegre törő olvasmányt, amely támpontokat ad ahhoz, hogyan éljünk teljes, örömteli, önálló és szabad életet, akár egy macska.",
      "image": "../../assets/img/lifestyle/9.jpg",
      "price": 3400,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 10,
      "catId": "cat-1",
      "name": "A kiemelkedően eredményes fiatalok 7 szokása",
      "author": "Sean Covey",
      "description":
        "A könyv tizenévesek és fiatal felnőttek milliói számára jelentett iránytűt ahhoz, hogy valóban sikeres legyen az életük. Kézikönyvet arról, amit a fiataloknak tudniuk kell a helyes énképről, az egészséges kapcsolatokról, a csoportnyomásról, az elvek vállalásáról és arról, hogy miképp valósíthatják meg a céljaikat. Mindezt élvezetes stílusban tálalja, sok történettel, vicces retró rajzokkal és híres emberek inspiráló gondolataival",
      "image": "../../assets/img/lifestyle/10.jpg",
      "price": 4550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 11,
      "catId": "cat-1",
      "name": ". F**k It - B...a meg!",
      "author": "John C. Parkin",
      "description":
        "Parkin arra vállalkozik, hogy megadja a szükséges lökést, hogy felhagyj a kifogásokkal, és végre azt tedd, amit szeretsz! Feltéve, ha tudod, mi az! Ha nem, az sem baj, John segít megtalálni. Sorra veszi mindazokat a gátakat, amelyekkel gyakran szembesülsz: Nem lehetek ilyen önző! vagy Sosem tudnék megélni abból, amit szeretek!. Segít legyőzni a legnagyobb visszatartó erőt: a félelmeidet.",
      "image": "../../assets/img/lifestyle/11.jpg",
      "price": 2900,
      "stock": 23,
      "featured": true,
      "active": true
    },
    {
      "id": 12,
      "catId": "cat-1",
      "name": "A zene taója",
      "author": "John M. Ortiz PH.D",
      "description":
        "Dr. Ortiz természetes zenészi képességeit és pszichológusi képzettségét kombinálva dolgozta ki módszereit több mint két évtizeden át, ezeket alkalmazva fogadja el, amit érez, és dolgozzon azon, amit érezni szeretne! Semmit nem kell bemagolni - egyszerűen csak játssza el, és minél előbb koncentrál a zenére, annál hamarabb fogja jól érezni magát!",
      "image": "../../assets/img/lifestyle/12.jpg",
      "price": 5600,
      "stock": 14,
      "featured": false,
      "active": true
    },
    {
      "id": 13,
      "catId": "cat-1",
      "name": "Mi történt veled?",
      "author": "Bruce D. Perry - Oprah Winfrey",
      "description":
        "Oprah saját múltbéli történeteire és tapasztalataira támaszkodva elénk tárja, milyen sebezhetővé válhatunk a fiatalkorban átélt traumák és ártalmak hatására. A könyvön végigvonuló beszélgetésük során Oprah és dr. Perry az emberek, a különböző viselkedési formák és önmagunk megértésének témájára helyezi a hangsúlyt.",
      "image": "../../assets/img/lifestyle/13.jpg",
      "price": 4570,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 14,
      "catId": "cat-1",
      "name": "A meditációról érthetően",
      "author": "Dr. Steven Laureys",
      "description":
        "Aki egyszer elkezdi gyakorolni valamelyik meditációs technikát, annak örökre megváltozik az élete - állítja a könyv szerzője, a belga Steven Laureys neurológus és kutató. Laureys a kómába esett emberek agyi működését vizsgálta tudósként, amikor találkozott a meditációval, és egyre több és több időt töltött vele.",
      "image": "../../assets/img/lifestyle/14.jpg",
      "price": 5500,
      "stock": 21,
      "featured": false,
      "active": true
    },
    {
      "id": 15,
      "catId": "cat-1",
      "name": "Jöttünk, láttunk, elegünk van",
      "author": "Anne Helen Petersen",
      "description":
        "Pontos elemzés, mélyen együttérző könyv arról a lelki teherről, amellyel a modern kapitalizmus nehezedik rá azokra, akiket a saját képére formál. A Jöttünk, láttunk, elegünk van elengedhetetlenül fontos könyv korunk és saját magunk megértéséhez.",
      "image": "../../assets/img/lifestyle/15.jpg",
      "price": 2450,
      "stock": 32,
      "featured": true,
      "active": true
    },
    {
      "id": 16,
      "catId": "cat-1",
      "name": "Ubuntu - Boldogság afrikai módra",
      "author": "Mungi Ngomane",
      "description":
        "A bantu nyelvekben gyökerező ubuntu kifejezés egy tradicionális afrikai életszemléletet takar, melynek középpontjában a mások iránt tanúsított emberség áll, és melynek üzenete a következőképpen foglalható össze: Az ember csak mások által válik emberré.",
      "image": "../../assets/img/lifestyle/16.jpg",
      "price": 3550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 17,
      "catId": "cat-1",
      "name": "Hogyan éljük túl a járványokat",
      "author": "Michael Greger",
      "description":
        "Miközben a világ az új koronavírus 2019 - más néven COVID-19 - pusztító hatásával küzd, dr. Greger nemcsak arra világít rá, hogy mit tehetünk a saját és a szeretteink védelmében egy pandémia alatt, hanem arra is, hogy az emberi társadalomnak muszáj lépéseket tennie annak érdekében, hogy csökkentse a jövőben ránk leselkedő még súlyosabb katasztrófák valószínűségét.",
      "image": "../../assets/img/lifestyle/17.jpg",
      "price": 6500,
      "stock": 10,
      "featured": false,
      "active": true
    },
    {
      "id": 18,
      "catId": "cat-1",
      "name": "A japán életmód művészete",
      "author": "Jo Peters",
      "description":
        "A hagyományos japán kultúra az élethez való tudatos hozzáállásról ismert. A béke és az inspiráció forrásává válhat az Ön számára, akár az ikigaira (az értelem keresése) összpontosít, vagy például az ikebanával (a virágrendezés művészete) foglalatoskodik. Gondolkodjon el az elveken, hogyan lehet megnyugvást találni, és kizárni életünkből a lényegtelen dolgokat.",
      "image": "../../assets/img/lifestyle/18.jpg",
      "price": 3500,
      "stock": 5,
      "featured": true,
      "active": true
    },
    {
      "id": 19,
      "catId": "cat-1",
      "name": "Út a teljességhez",
      "author": "Ruediger Dahlke - Thorwald Dethlefsen",
      "description":
        "Az út a teljességhez azokhoz szól, akik valóban szembe akarnak és mernek nézni önmagukkal - betegségükkel és azzal, amiről ez a betegség árulkodik. A betegségek tünetei ugyanis kivétel nélkül mélyebb értelmet hordoznak, a lelkünk üzeneteként arra ösztönöznek, hogy a teljességhez vezető útra lépve rátaláljunk önmagunkra.",
      "image": "../../assets/img/lifestyle/19.jpg",
      "price": 4550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 20,
      "catId": "cat-1",
      "name": "Agytisztítás",
      "author": "Dr. Austin Perlmutter",
      "description":
        "Befolyás alatt élünk. A 21. században sokak anyagi érdeke fűződik ahhoz, hogy megszerezzék és megtartsák figyelmünket, például az okostelefonok által. Mi pedig engedünk nekik, mint ahogy engedünk az egészségtelen, de finom ételek csábításának, a kényelemnek, a gombnyomásra vásárlásnak. Miért van ez így? Nem, nem azért, mert lusták vagyunk. Hanem azért, mert kihasználják agyunk szerkezetét, mely a túlélésre lett programozva.",
      "image": "../../assets/img/lifestyle/20.jpg",
      "price": 3500,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 21,
      "catId": "cat-1",
      "name": "Növényi étrend a teljes életért",
      "author": "Dr. Iller Barbara",
      "description":
        "A teljes értékű növényi étrend ideális gyerekeknek, felnőtteknek, várandósoknak, szoptatás idején, időskorban, mindig. Ez a legjobb étrend minden életkorban.",
      "image": "../../assets/img/lifestyle/21.jpg",
      "price": 2690,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 22,
      "catId": "cat-1",
      "name": "Ne függj senkitől",
      "author": "Melody Beattie",
      "description":
        "Meg kell érteni: mindenki csak saját magáért felelős. Az emberek úgy éreznek, ahogyan érezni akarnak; azt gondolják, amit gondolnak; azt teszik, amit hitük szerint tenniük kell; s csupán akkor változnak meg, ha belül készen állnak a változásra. Az egyetlen ember, akit valaha is megváltoztathatunk - saját magunk. Az egyetlen ember, akit jogunk van irányítani - mi magunk vagyunk.",
      "image": "../../assets/img/lifestyle/22.jpg",
      "price": 3300,
      "stock": 4,
      "featured": false,
      "active": true
    },
    {
      "id": 23,
      "catId": "cat-1",
      "name": "ZEN - Az egyszerű élet művészete",
      "author": "Shunmyo Masuno",
      "description":
        "Százféle információ zúdul ránk, felőrli napjainkat a szüntelen sietség és a jövőtől való szorongás. Nem szívesen gondolunk arra, hogy az élet egyszer véget ér, félresöpörjük a múlandóság apró jeleit.",
      "image": "../../assets/img/lifestyle/23.jpg",
      "price": 5000,
      "stock": 13,
      "featured": false,
      "active": true
    },
    {
      "id": 24,
      "catId": "cat-1",
      "name": "Egyél az egészségedért",
      "author": "Dr. Joel Fuhrman",
      "description":
        "A táplálkozás terén az áttörések korszakát éljük, ami egyedülálló lehetőséget biztosít számunkra, hogy szuperegészségesek legyünk; vagy élhetünk az elképzelhető legrosszabb étrenden. Rajtunk áll, mit választunk.",
      "image": "../../assets/img/lifestyle/24.jpg",
      "price": 4560,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 25,
      "catId": "cat-1",
      "name": "A gyógyulás kulcsa",
      "author": "Késmárki László",
      "description":
        "A súlyos betegség egy lecke. Az Univerzum világossá kívánja tenni, hogy valamilyen érzés, gondolat vagy szokás megzavarja a test egyensúlyát és általában a természettel, az univerzummal való egyensúlyunkat.Ha az ego nem hallgat belső irányításának útmutatásaira, és nem cselekszik élettervével egybehangoltan, akkor könnyen abban az illúzióban ringathatja magát, hogy teljesen független.",
      "image": "../../assets/img/lifestyle/25.jpg",
      "price": 3800,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 26,
      "catId": "cat-2",
      "name": "Eldorádó ostroma",
      "author": "Biró Krisztián",
      "description":
        "Ez itt éppen egy borsodi srác története, aki szerencsét próbál a felnövésben, az ingoványos irodalmi szcénában, a kétezer-tízes évtizedben, a bűnös nagyvárosban, Ká-Európában, a felgyorsult, amerikanizálódott világban, a Föld nevű bolygón",
      "image": "../../assets/img/literature/1.jpg",
      "price": 4560,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 27,
      "catId": "cat-2",
      "name": "A Patkánysziget és más történetek",
      "author": "Jo Nesbo",
      "description":
        "Az embernek minden körülmények között harcolnia kell önmagáért. Például amikor egy posztapokaliptikus világban egy felhőkarcoló tetején várja, hogy evakuálják, miközben a tömeg az utcán küzd a túlélésért.",
      "image": "../../assets/img/literature/2.jpg",
      "price": 6500,
      "stock": 10,
      "featured": false,
      "active": true
    },
    {
      "id": 28,
      "catId": "cat-2",
      "name": "Becsúszik a kezébe a boldogság",
      "author": "Agnés Martin-Lugand",
      "description":
        "Iris gyerekkora óta szenvedélyesen rajong a varrásért. Boldoggá teszi, ha ruhákat tervezhet, ha a tű és cérna varázslatával életre keltheti őket. A szülei azonban csak szeszélynek tekintik a vágyait: a divat komolytalan szakma. Iris pedig nehéz szívvel, de lemond az álmáról.",
      "image": "../../assets/img/literature/3.jpg",
      "price": 3990,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 29,
      "catId": "cat-2",
      "name": "Megpóbáltam",
      "author": "Sütő Gyuszi",
      "description":
        "A könyv 36 fejezete gyermekként átélt történetekkel kezdődik, a szerző még alig töltötte be a 10 évet ekkor. Cserebogár-vadászatról, focilabdákról, parittyázásról és mindenféle játszótéri kalandról olvashatunk először, de ahogy telnek az évek - és ahogy egyre nehezedik az élet Ceausescu kommunista diktatúrája alatt.",
      "image": "../../assets/img/literature/4.jpg",
      "price": 6500,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 30,
      "catId": "cat-2",
      "name": "Vaskirályné",
      "author": "Joanna Courtney",
      "description":
        "Vasököl - bársonykesztyűben: Cordelia története Kr. e. 500 - Lear az Anyaistennő végtelen támogatását élvezi, legnagyobb boldogsága három lánygyermeke, akiknek a szövetségével biztosítva látja törzse, a coritanok vérvonalát.",
      "image": "../../assets/img/literature/5.jpg",
      "price": 2300,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 31,
      "catId": "cat-2",
      "name": "Az elveszett kenyér",
      "author": "Edith Bruck",
      "description":
        "Hogy semmit ne feledjen, és mások se feledjenek, Bruck Edith első könyvének megjelenése után hatvan évvel ismét felidézi gyerekkorát, majd pedig életének azt az időszakát, amikor télen-nyáron ugyanabban a facipőben taposta a földet Auschwitzban, aztán Németország különböző koncentrációs táboraiban.",
      "image": "../../assets/img/literature/6.jpg",
      "price": 3450,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 32,
      "catId": "cat-2",
      "name": "Életemnél is jobban - 115 újabb szerelmes levél és történet",
      "author": "Nyáry Krisztián",
      "description":
        "Nyáry Krisztián évek óta módszeresen gyűjti a magyar kultúrtörténet legszebb, legérdekesebb vagy éppen legfelháborítóbb szerelmes leveleit. A gyűjteményből 125 levelet a hozzájuk tartozó történetekkel együtt közre is bocsátott 2018-ban megjelent, nagy sikerű Írjál és szeressél című könyvében.",
      "image": "../../assets/img/literature/7.jpg",
      "price": 4690,
      "stock": 4,
      "featured": true,
      "active": true
    },
    {
      "id": 33,
      "catId": "cat-2",
      "name": "Jack",
      "author": "Marilynne Robinson",
      "description":
        "A Jack egy rendhagyó szerelem történetét meséli el az ötvenes évek szegregált Amerikájában. Jack Boughton, a társadalmon kívül tengődő fehér csavargó és Della Miles, a jó családból származó színes bőrű irodalomtanár rendkívüli románcában mégsem a társadalmi és törvényi akadályok a legerősebbek, hanem azok a gátak, amelyek az emberek lelkében vannak.",
      "image": "../../assets/img/literature/8.jpg",
      "price": 1990,
      "stock": 13,
      "featured": false,
      "active": true
    },
    {
      "id": 34,
      "catId": "cat-2",
      "name": "Ott leszel?",
      "author": "Guillaume Musso",
      "description":
        "Mit változtatnánk az életünkön, ha véletlen szerencse folytán visszamehetnénk a múltba? Milyen tévedéseket próbálnánk helyrehozni? Milyen fájdalmat, lelkifurdalást, megbánást törölnénk el szívesen? Lenne-e merszünk új értelmet adni a létünknek? Mivé válnánk? Merre tartanánk? És kivel?",
      "image": "../../assets/img/literature/9.jpg",
      "price": 3400,
      "stock": 20,
      "featured": true,
      "active": true
    },
    {
      "id": 35,
      "catId": "cat-2",
      "name": ". Sosem elég",
      "author": "Marc Elsberg",
      "description":
        "Az emberek világszerte forronganak. A fenyegető megszorító csomagok, a tömeges munkanélküliség és az éhezés ellen tüntetnek - az új gazdasági válság következményei ellen, amely bankokat, cégeket és államokat juttat csődbe. Kiélesednek a nemzeti és nemzetközi konfliktusok.",
      "image": "../../assets/img/literature/10.jpg",
      "price": 4550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 36,
      "catId": "cat-2",
      "name": "Társkeresők",
      "author": "B. E. Belle",
      "description":
        "Milyen nehézségekkel kell megküzdenie és mennyi megalkuvás szükséges a mai világban a társkeresés során egy olyan nőnek, aki az életben komoly elvekkel és értékekkel rendelkezik? És milyen élete lehet azoknak a nőknek, akik azt tesznek, amit csak akarnak és azzal, akivel csak akarják?",
      "image": "../../assets/img/literature/11.jpg",
      "price": 2900,
      "stock": 23,
      "featured": false,
      "active": true
    },
    {
      "id": 37,
      "catId": "cat-2",
      "name": "Gyér világ",
      "author": "Vladimir Nabokov",
      "description":
        "Az 1962-ben megjelent Gyér világ Nabokov - sőt a világirodalom - egyik legkülönösebb alkotása; a Lolita mellett ez szerepel rendszerint a száz év száz legjobb regényét felsoroló különféle összeállításokban.",
      "image": "../../assets/img/literature/12.jpg",
      "price": 5600,
      "stock": 14,
      "featured": true,
      "active": true
    },
    {
      "id": 38,
      "catId": "cat-2",
      "name": "Erzsébet és Fülöp - a kezdet kezdete",
      "author": "Bruce D. Perry - Oprah Winfrey",
      "description":
        "Windsor, 1943. Miközben a világban háború tombol, Erzsébet, az ifjú hercegnő izgatottan várja, hogy újra találkozzon a lefegyverzően jóképű tengerésztiszttel, akit tizenhárom éves kora óta képtelen kiverni a fejéből. A Királyi Haditengerészet egyik legfiatalabb hadnagya, Fülöp mindazt képviseli, amitől Erzsébetet egész addigi életében óva intették. A kiszámíthatatlanságot.",
      "image": "../../assets/img/literature/13.jpg",
      "price": 4570,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 39,
      "catId": "cat-2",
      "name": "Valami népi",
      "author": "Grecsó Krisztián",
            "description":
        "Grecsó Krisztián történeteiben a párhuzamosok a végtelenben sem mindig találkoznak, de a találkozások mégis elmesélhetők. Néha az események egy időben, de más helyen zajlanak (Erdélyben, a fővárosban vagy falun), máskor egyazon helyen, de különböző időkben: harmincas vagy ötvenes években, és közben nagyon is a mában.",
      "image": "../../assets/img/literature/14.jpg",
      "price": 5500,
      "stock": 21,
      "featured": false,
      "active": true
    },
    {
      "id": 40,
      "catId": "cat-2",
      "name": "Árvízi napló",
      "author": "Fábián Janka",
      "description":
        "Alig hét esztendővel a pusztító kolerajárvány után, 1838 tavaszán minden idők legnagyobb árvize öntötte el az ekkor már rohamosan fejlődő, nyüzsgő és prosperáló várost, Pestet. A hónapok óta észlelt baljós előjelek ellenére a lakosok nem törődtek a fenyegető veszéllyel, és csupán a legalapvetőbb intézkedéseket tették meg a közeledő jeges ár feltartóztatására.",
      "image": "../../assets/img/literature/15.jpg",
      "price": 2450,
      "stock": 32,
      "featured": false,
      "active": true
    },
    {
      "id": 41,
      "catId": "cat-2",
      "name": "Fény és árnyék",
      "author": "Eric Larson",
      "description":
        "Legújabb könyvében az amerikai újságíró Erik Larson arra vállalkozik, hogy szélesebb perspektívából értelmezze Winston Churchill politikáját a II. világháború legsötétebb évében. A narratíva az 1940. május 10 és 1941. május 10. közötti egy évet öleli fel, amikor Hitler a legkegyetlenebb eszközök bevetésével próbálta megfékezni, hogy Nagy-Britannia eredményesen vegyen részt a háborúban.",
      "image": "../../assets/img/literature/16.jpg",
      "price": 3550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 42,
      "catId": "cat-2",
      "name": "A lány, aki megszökött Auschwitzból",
      "author": "Ellie Midwood",
      "description":
        "Az auschwitzi tetováló, A döntés és az Árvák vonata rajongói imádni fogják ezt a lélegzetelállítóan gyönyörű mesét a bátorságról a tragédia közepette és a merészségről a félelem dacára. A lány, aki megszökött Auschwitzból igaz történeten alapul, és bebizonyítja, hogy a szerelem lehet fény a sötétben...",
      "image": "../../assets/img/literature/17.jpg",
      "price": 6500,
      "stock": 10,
      "featured": false,
      "active": true
    },
    {
      "id": 43,
      "catId": "cat-2",
      "name": "Az álmokat nem szabad elmesélni",
      "author": "Nermin Yildirim",
      "description":
        "Elhallgatjuk azt, amiről leginkább beszélnünk kellene. Talán csak álmunkban fedjük fel, amit rejtegetünk. olvashatjuk Nermin Yildirim könyvében. A regény szálait az elhallgatások, titkok és álmok logikája szervezi.",
      "image": "../../assets/img/literature/18.jpg",
      "price": 3500,
      "stock": 5,
      "featured": false,
      "active": true
    },
    {
      "id": 44,
      "catId": "cat-2",
      "name": "Állatfarm ",
      "author": "George Orwell",
      "description":
        "Minden állat egyenlő? Ugyan már. Vannak köztük egyenlőbbek is. Orwell 1943-44-ben írott műve minden elnyomó, totalitárius rendszerre ráillik. Egy angol major a színhely, ahol az állatok a disznók vezetésével megdöntik az Ember uralmát.",
      "image":"../../assets/img/literature/19.jpg",
      "price": 4550,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 45,
      "catId": "cat-2",
      "name": "Apám szívével kezemben",
      "author": "Dési Péter",
      "description":
        "A mű, a címe alapján egy édesapa szívéről szól, amit egyszer az író - megrendítő és kiváltságos módon - a kezében tarthatott. Ez már önmagában is hatalmas sztori, bár csupán egy rövid, ám rendkívüli része a regénynek.A történet valójában annak szerzőjét, és az őt körülvevő embereket tárja elénk.",
      "image": "../../assets/img/literature/20.jpg",
      "price": 3500,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 46,
      "catId": "cat-2",
      "name": "Rokon lelkek - Válogatott esszék",
      "author": "Nádas Péter",
      "description":
        "Az ember olyan lény (legalábbis európai változatában és szerencsés esetben), aki szeret nagy felfedezéseket tenni. Olykor szívesen feltalálja a spanyolviaszt. Máskor tényleg világraszóló felfedezést tesz. Felfedezi a kereket. Egy másik évszázadban a gyufát, amit akkoriban még gyújtónak neveztek.",
      "image": "../../assets/img/literature/21.jpg",
      "price": 2690,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 47,
      "catId": "cat-2",
      "name": "Egyasszony",
      "author": "Péterfy-Novák Éva",
      "description":
        "Egy fiatal vidéki lánynak a 80-as évek derekán mozgás- és értelmi sérült gyermeke született. Bántalmazó férje oldalán küzdött kitartóan a családja boldogságáért, de harca kudarcra volt ítélve.Azóta eltelt több mint harminc év, a lányból asszony lett, de nem sikerült feldolgoznia az átélteket.",
      "image": "../../assets/img/literature/22.jpg",
      "price": 3300,
      "stock": 4,
      "featured": false,
      "active": true
    },
    {
      "id": 48,
      "catId": "cat-2",
      "name": "Az utolsó reggel Párizsban.",
      "author": "Náray Tamás",
      "description":
        "Ha feladod a céljaidat, és lemondasz a vágyaidról, csak azért, mert pillanatnyilag kilátástalannak látod a helyzetet, tudnod kell, hogy ezzel elárulod az életed. És ezek után nem csodálkozhatsz azon, hogy a saját sorsod bánik majd veled úgy, mint az ellenségével.",
      "image": "../../assets/img/literature/23.jpg",
      "price": 5000,
      "stock": 13,
      "featured": true,
      "active": true
    },
    {
      "id": 49,
      "catId": "cat-2",
      "name": "A kutyafuttató",
      "author": "Sofi Oksanen",
      "description":
        "Oksanen ismét megrázó és egy thriller feszültségével vetekedő regényt írt női sorsokról, női test és hatalom kapcsolatáról, női perspektívákról egy olyan korban és helyen, amikor és ahol mindent áthat a korrupció. Kelet és nyugat határán, Ukrajna függetlenségének idején, a kétezres években fiatal lányok próbálnak boldogulni: a meddőségi iparban dolgoznak donorként, béranyaként, remélve, hogy egyszer talán szabadon dönthetnek az életükről.",
      "image": "../../assets/img/literature/24.jpg",
      "price": 4560,
      "stock": 20,
      "featured": false,
      "active": true
    },
    {
      "id": 50,
      "catId": "cat-2",
      "name": "Mély levegő",
      "author": "Halász Rita",
      "description":
        "Halász Rita kíméletlen pontossággal tárja fel egy harmincas pár kapcsolatának alakulását és válságát, majd a súlyos szembesülésekkel terhes kivezető út állomásait. Nem kendőz el semmit, és nem szolgáltat igazságot senkinek. Az első személyű elbeszélés mondatai feszesek, felkavaróan őszinték és élesen ironikusak.",
      "image": "../../assets/img/literature/25.jpg",
      "price": 3800,
      "stock": 20,
      "featured": false,
      "active": true
    }
  ]; */

  constructor(
    private http: HttpClient
  ) {}

  /* getAll(): Product[] {
    return this.list;
  } */

  getAll2(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`)
  }

  getOne(id: number): Observable<Product>{
    return this.http.get<Product>( `${this.apiUrl}/${id}`)
  }

  update(product: Product): Observable<Product>{
    return this.http.patch<Product>(
      `${this.apiUrl}/${product.id}`,
      product)
  }

  delete(product: Product): Observable<Product>{
    return this.http.delete<Product>(
      `${this.apiUrl}/${product.id}`)
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(
      `${this.apiUrl}/${product.id}`, product)
  }
}
