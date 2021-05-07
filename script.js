const kifogas = document.querySelector('.kifogas')
const generaloGomb = document.querySelector('.btn-generate')

const kifogasok = [
    'Nem tudtam digitális oktatásban tanulni',
    'A tanárom nem tartott órát',
    'Túl nehéz volt a feladatsor',
    'Hazudtak a szivárogtatott témáról :(',
    'Szakközépbe járok',
    'Nem ugyanolyan volt, mint tavalyi',
    'Be voltam zárva és mély depresszióba estem :(',
    'Szar a magyar oktatás',
    'Az lg-t 1g-nek néztem, szar volt a betűtípus :(',
    'Én egyszerűen nem értem a matekot :(',
    'Kevés volt az idő a felkészülésre',
    'Az előző évi sokkal könnyebb volt',
    'A TAVALYI MATEKON CSAK SZÍNEZNI KELLETT MOST MEG GONDOLKODNI IS :(',
    'AZ ÍRÓ NYITOTT VÉGET HAGYOTT A NOVELLÁBAN :(',
    'Nekem egyszerűen nincs érzékem a nyelvekhez :(',
    'Nem rakták fel előtte a megoldókulcsot',
    'A próbaérettségi sokkal jobban ment',
    'Elavult a magyar oktatási rendszer',
    'Magyarországon nincs megfelelő nyelvoktatás',
    'Rosszul volt megfogalmazva a feladat',
    'Nem az volt a töriben amit megtanultam',
    'Kit érdekel az a hülye kutya életkora?', 
    'Nem is a Németh László volt a novellaelemzésben',
    'Előtte egy nappal kezdtem el készülni, és mégsem jött össze az ötös :(',
    'Mateking helyett Netflixre fizettem elő',
    'A korcsmát kocsmának olvastam',
    'Az lg helyett 1*9,81-et helyettesítettem be',
    'A matekra születni kell',
    'Nem akart segíteni nekem a tanár érettségi közben',
    'Nekünk nem tanítottak ilyen logaritmusokat',
    'Elmarad a szóbeli én pedig írni ugye nem tudok',
    'Nem lehetett érteni az angol érettségin a listening feladatokat, mert nem magyarul beszéltek.',
    'Nem volt elég időm, mert beszorultam a vécébe',
    'Azthittem, ha nincs szóbeli nem kell tanulni se',
    'Nem tudtam, hogy május eleje az érettségi időpont',
    'Nem tudtam hogy az év végén ilyen vizsgát kell tennünk',
    'Bevertem a fejem előtte, és nem tudtam koncentrálni',
    'Kiverte a koronavírus a kezemből a tollat',
    'A maszktól bepárásodott a szemüvegem, és nem láttam a feladatlapot',
    'Azt hittem a matekon középszinten nem kell tudni a törteket',
    'Végig szarnom kellett',
    'Rossz pálinkát ittam érettségi előtt',
    'Nem vittem szögmérőt sajnos',
    'Nem vagyok az IQ spektrumon',
    'Nem vihettem szótárat a matekra :((',
    'Nem a 10-es számredszerben tanították nekem a matekot...',
    'Életembe nem hallottam még Debrecenről',
    'A dualizmus nem is létezett soha',
    'Sosem hallottam még Periklész nevét...',
    'Nem Mátyás pénzügyei volt az esszétéma',
    '"Nem volt alkalmunk az utóbbi egy évben rendesen elsajátítani a feladatokhoz szükséges tudást" - Anita, Szeged',
    'Az idegennyelvűre készültem',
    'Elkaptak a bokszosok, nem értem oda'
    // update
]

let generaltKifogas = ""
generaloGomb.addEventListener("click", () => {
    generaltKifogas = kifogasok[Math.floor(Math.random() * kifogasok.length)]
    kifogas.textContent = generaltKifogas
})

