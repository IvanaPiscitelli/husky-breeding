import imgC from "../assets/img_carousel.jpg";
import { LiaInstagram, LiaFacebook } from "react-icons/lia";

export const imgHome = [
  { id: 1, img: imgC },
  { id: 2, img: imgC },
  { id: 3, img: imgC },
  { id: 4, img: imgC },
  { id: 5, img: imgC },
];
export const navigation = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About The Breed", href: "#" },
  { id: 3, name: "Our Dogs", href: "#" },
];

export const social = [
  { id: 1, name: <LiaFacebook size={30} />, icon: "facebook", href: "https://www.facebook.com/conteamarullo" },
  {
    id: 2,
    name: <LiaInstagram size={30} />,
    icon: "instagram",
    href: "https://www.instagram.com/petgroomingdimichelemarullo/",
  },
];

export const translations = [
  { id: 1, name: "EN", href: "#" },
  { id: 2, name: "IT", href: "#" },
];

export const recognitions = [
  { id: 1, name: "Enci", img: "" },
  { id: 2, name: "Enci", img: "" },
  { id: 3, name: "Enci", img: "" },
];

export const menuBreedList = [
  { id: "history", text: "Siberian Husky History" },
  { id: "standard", text: "Standard del Siberian Husky" },
  { id: "defect", text: "Defect" },
  { id: "grooming", text: "Grooming" },
  { id: "health", text: "Health" },
  { id: "links", text: "Links" },
];

export const generalAppearanceList = [
  {
    id: 1,
    title: "HEAD",
    text: "Regione del cranio: cranio di medie dimensioni, e proporzionato al corpo; leggermente arrotondato sulla sommita’ e che va diminuendo dal punto piu’ ampio fino agli occhi. Stop ben definito. Regione del muso: tartufo nero nei cani grigi fulvi o neri, fegato nei cani color rame; puo’ essere color carne nei cani interamente bianchi. Accettato il tartufo striato di rosa “tartufo da neve”. Muso di media lunghezza e larghezza, si assottiglia gradatamente verso il tartufo, con l’estremità ne appuntita ne quadrata. La canna nasale e’ diritta dallo stop alla punta del tartufo. Labbra ben pigmentate e molto aderenti. Mascelle – Denti: chiusura a forbice. Occhi: a mandorla, moderatamente distanziati e posizionati un po’ obliqui. Gli occhi possono essere marroni o blu; ammessa l’eterocromia. Espressione penetrante ma amichevole, interessata e mai cattiva. Orecchie: di media dimensione, a forma triangolare, ravvicinate e posizionate alte sulla testa. Sono spesse, ben fornite di pelo, leggermente arcuate nella parte posteriore e ben erette con le estremita’ leggermente arrotondate che puntano verso l’alto.",
  },
  {
    id: 2,
    title: "NECK",
    text: "Di media lunghezza, arcuato e portato fieramente eretto in stazione. In movimento, al trotto, il collo e’ esteso in modo che la testa sia portata leggermente in avanti.",
  },
  {
    id: 3,
    title: "BODY",
    text: "Dorso diritto e forte, con linea superiore orizzontale dal garrese alla groppa. Di media lunghezza, ne “cobby” ne rilassato perche’ eccessivamente lungo. Rene teso e asciutto, piu’ stretto del torace, e leggermente retratto. Groppa inclinata rispetto alla spina dorsale, ma mai tanto avvallata da limitare la spinta dei posteriori. Torace profondo e forte ma non troppo ampio, col punto piu’ basso al livello del gomito. Le costole sono ben cerchiate vicino alla spina dorsale ma appiattite sui fianchi per permettere un movimento sciolto.",
  },
  {
    id: 4,
    title: "TAIL",
    text: "Ricca, a spazzola come la coda di volpe, e’ inserita proprio sotto il livello della linea dorsale e portata sul dorso in una aggraziata curva a falce quando il cane e’ in attenzione. Quando e’ portata alta non si arrotola sui fianchi ne si appiattisce sul dorso. Per il cane a riposo e’ normale una coda bassa. Il pelo della coda e’ di media lunghezza, e circa della stessa lunghezza sopra, sui lati e sotto, con l’aspetto di una spazzola rotonda.",
  },
  {
    id: 5,
    title: "ARTI ANTERIORI",
    text: "In stazione, e visti dal davanti, gli arti sono moderatamente distanziati, paralleli e diritti. L’ossatura e’ di sostanza ma mai pesante. La lunghezza degli arti dal gomito al suolo e’ leggermente superiore della distanza fra il gomito e la punta del garrese. Gli speroni dell’anteriore possono essere tolti. Spalla e braccio: la scapola e’ ben obliqua. Braccio leggermente obliquo all’indietro dalla punta della spalla al gomito, e non e’ mai perpendicolare al suolo. I muscoli e legamenti tra la spalla e la cassa toracica sono fermi e ben sviluppati. Gomiti: aderenti al corpo e non deviati in fuori ne in dentro. Carpo:forte, ma elastico. Metacarpi: visti di lato sono leggermente inclinati.",
  },
  {
    id: 6,
    title: "ARTI POSTERIORI",
    text: "In stazione, se visti dal dietro, i posteriori sono moderatamente distanziati e paralleli. Gli speroni, se ve ne sono, vanno rimossi. Coscia: molto muscolosa e potente. Ginocchio:ben angolato. Garretto:ben definito e disceso.",
  },
  {
    id: 7,
    title: "FEET",
    text: "Ovali ma non lunghi. Sono di media misura, compatti e con molto pelo fra le dita e i cuscinetti che sono duri e spessi. In stazione i piedi non devono essere deviati in fuori ne in dentro.",
  },
  {
    id: 8,
    title: "GAIT",
    text: "Il caratteristico movimento del Siberian Husky e’ regolare e senza sforzo evidente. E’ veloce e leggero, e nel ring dovrebbe essere condotto col guinzaglio allentato ad un trotto moderatamente veloce, mostrando buon allungo degli anteriori e buona spinta dei posteriori. Se visto dal davanti, al passo, il Siberian Husky non procede sul single-track, ma come la velocita’ aumenta, gli arti gradualmente s’inclinano fino a che le impronte cadono sulla linea dell’asse longitudinale del corpo. Quando le impronte convergono, gli arti anteriori e posteriori si portano diritti in avanti, senza che gomiti o ginocchia vengano deviati in fuori ne in dentro. Ognuno degli arti posteriori si muove sull’orma dell’arto anteriore dello stesso lato. Quando il cane si muove, la linea dorsale rimane ferma e orizzontale.",
  },
  {
    id: 9,
    title: "COAT",
    text: "Pelo: il pelo del Siberian Husky e’ doppio e di media lunghezza, e da’ un aspetto di un ricco mantello, ma non e’ mai tanto lungo da mascherare il netto profilo del cane. Il sottopelo e’ soffice e denso e di sufficiente lunghezza da sostenere il pelo di copertura. Il pelo di guardia del mantello di copertura e’ diritto e piuttosto appoggiato sul corpo, mai ruvido o drizzato. Bisogna notare che l’assenza di sottopelo durante il periodo della muta e’ normale. E’ permesso regolare i baffi e il pelo fra le dita e attorno ai piedi per permettere un aspetto piu’ ordinato; toelettare il pelo su qualsiasi altra parte del corpo non e’ permesso e deve essere severamente penalizzato. Colore: tutti i colori dal nero al bianco totale sono permessi. Si riscontra una varieta’ di macchie sulla testa di tipo diverso, inclusi vari disegni che non si trovano in altre razze.",
  },
  {
    id: 10,
    title: "SIZE-WEIGHT",
    text: "Altezza al garrese: Maschi da 53,5 cm a 60 cm – Femmine da 50,5 cm a 56 cm.\n Peso: Maschi da 20,5 kg a 28 kg – Femmine da 15,5 kg a 23 kg.\n Il peso e’ proporzionato all’altezza. Le misura indicate sopra rappresentano le altezze estreme e i pesi limite, senza alcuna preferenza per uno dei due estremi.",
  },
];

export const defectList = [
  {
    id: 1,
    title: "CRANIO",
    text: "Testa rozza o pesante, testa cesellata troppo finemente",
  },
  {
    id: 2,
    title: "STOP",
    text: "Insufficiente",
  },
  {
    id: 3,
    title: "MUSO",
    text: "Troppo appuntito o troppo rozzo, troppo corto o troppo lungo",
  },
  {
    id: 4,
    title: "DENTI",
    text: "Ogni altra chiusura che non sia la forbice",
  },
  {
    id: 5,
    title: "OCCHI",
    text: "Inseriti troppo obliquamente o troppo vicini",
  },
  {
    id: 6,
    title: "COLLO",
    text: "Troppo corto e spesso, troppo lungo",
  },
  {
    id: 7,
    title: "DORSO",
    text: "Debole o cedevole, dorso di carpa, linea dorsale discendente",
  },
  {
    id: 8,
    title: "TORACE",
    text: "Troppo largo, “a botte”, costole troppo piatte o deboli",
  },
  {
    id: 9,
    title: "CODA",
    text: "Appoggiata sul dorso o arrotolata, molto frangiata, inserita troppo alta o troppo bassa",
  },
  {
    id: 10,
    title: "SPALLE",
    text: "Diritte, fluttuanti",
  },
  {
    id: 11,
    title: "ARTI ANTERIORI",
    text: "Metacarpi deboli, ossatura troppo pesante, anteriori troppo chiusi o troppo aperti, gomiti in fuori",
  },
  {
    id: 12,
    title: "ARTI POSTERIORI",
    text: "Ginocchio diritto, garretti vaccini, cane col posteriore troppo chiuso o troppo aperto",
  },
  {
    id: 13,
    title: "PIEDI",
    text: "Cedevoli o con dita aperte, troppo grandi o di brutta forma, troppo piccoli o delicati, rivolti all’esterno o all’interno",
  },
  {
    id: 14,
    title: "MOVIMENTO",
    text: "Corto, saltellante, arti che si muovono a scatti verso l’esterno, andatura pesante o che rolla, passo che incrocia o andatura a granchio",
  },
  {
    id: 15,
    title: "MANTELLO",
    text: "Pelo lungo, ruvido o ispido, tessitura troppo dura o troppo serica, pelo regolato, ad eccezione di dove e’ permesso",
  },
  {
    id: 16,
    title: "DIFETTI ELIMINATORI",
    text: "Maschi alti piu’ di 60 cm e femmine alte piu’ di 56 cm. \n N.B. I maschi devono avere due testicoli apparentemente normali, completamente discesi nello scroto.",
  },
];
