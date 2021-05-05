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
    'Az lg helyett 1*9,81-et helyettesítettem be'
    //update
    


]

let generaltKifogas = ""
generaloGomb.addEventListener("click", () => {
    generaltKifogas = kifogasok[Math.floor(Math.random() * kifogasok.length)];
    kifogas.textContent = generaltKifogas
})

