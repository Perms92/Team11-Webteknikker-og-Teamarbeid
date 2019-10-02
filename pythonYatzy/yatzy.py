import random

def startKast():
    mitt_kast = []
    for i in range(5):
        mitt_kast.append(random.randint(1,6))
    return mitt_kast

def nytt_kast(innListe, indekser):
    utListe = innListe
    for i in indekser:
        utListe = nyTerning(utListe, i)
    return utListe

def nytt_kast_indexer():
    text = input("Hvilke terninger vil du kaste på ny? (separer med komma uten mellomrom (1-indexert) \n")
    if not text:
        return []
    if text == "alle":
        return [0,1,2,3,4]
    try:
        indekser = text.split(",")
        utListe = []
        for i in indekser:
            tall = int(i)
            if tall < 1 or tall >5:
                print("Du har skrevet et ugyldig tall, prøv på nytt")
                return nytt_kast_indexer()
            else:
                utListe.append(int(i)-1) #NB: endrer tilbake til 0-index
    except ValueError:
        print("Ugyldig input")
        print("Prøv igjen")
        return nytt_kast_indexer()
    return utListe


def nyTerning(liste, posisjon):
    utListe = liste
    utListe[posisjon] = random.randint(1,6)
    return utListe


def kast():
    mitt_kast = startKast()
    print("Du kastet:")
    print(mitt_kast)

    verdier = nytt_kast_indexer()
    mitt_kast = nytt_kast(mitt_kast, verdier)
    print("Ditt andre kast ble:")
    print(mitt_kast)

    verdier = nytt_kast_indexer()
    mitt_kast = nytt_kast(mitt_kast, verdier)
    print("Ditt tredje kast ble:")
    print(mitt_kast)
    return mitt_kast


def sjekk(hand, tall):
    antall = 0
    for element in hand:
        if element == tall:
            antall += 1
    return antall

def faseEn(kast, verdi):
    poeng = 0
    antall = sjekk(kast,verdi)
    poeng += verdi * antall
    print("Du fikk ", poeng, " poeng for å ha ", antall, " av ", verdi)
    return poeng

def bonus(poeng):
    if poeng >= 42:
        print("Du har ",poeng," og får 50 bonuspoeng!")
        return 50
    print("Du har ",poeng,", det er ikke nok til å få bonus!")
    return 0

def like(hand,antall):
    if sjekk(hand,6)>= antall:
        return 6*antall
    if sjekk(hand,5) >= antall:
        return 5*antall
    if sjekk(hand,4) >= antall:
        return 4*antall
    if sjekk(hand,3) >= antall:
        return 3*antall
    if sjekk(hand,2) >= antall:
        return 2*antall
    if sjekk(hand,1) >= antall:
        return 1*antall
    return 0

def toPar(hand):
    etPar = like(hand,2)
    if etPar > 0:
        verdi = etPar/2
        hand.pop(hand.index(verdi))
        hand.pop(hand.index(verdi))
        andrePar = like(hand,2)
        if etPar and andrePar and (etPar is not andrePar):
            return etPar+andrePar
    return 0

def straight(hand):
    harStright = True
    hand.sort()
    #print(hand, "test straight")
    for i in range(4):
        if (hand[i+1] - hand[i] == 1):
            print("Yeah!")
        else:
            print("Oh no!")
            return 0
    return sum(hand)


def litenStraight(hand):
    if 1 in hand and not 6 in hand:
        return straight(hand)
    return 0

def storStraight(hand):
    if 6 in hand and not 1 in hand:
        return straight(hand)
    return 0


def hus(kast):
    kast.sort()
    #print(kast, "test hus")
    if kast[0] == kast[1] and kast[2] == kast[3] == kast[4] and (kast[0] is not kast[4]):
        return sum(kast)
    if kast[3] == kast[4] and kast[0] == kast[1] == kast[2]:
        return sum(kast)
    return 0

def yatzee(kast):
    kast.sort()
    if kast[0] == kast[4]:
        return 50
    else:
        return 0

def saveScore(score):
    navn = input("Skriv inn navnet ditt: ")
    dato = input("Hva er datoen? ")
    print(navn, " fikk", score," poeng den ", dato)
    file = open("yatzyHighscore.txt","a")
    file.write("\n" + navn + " fikk " + str(score) + " poeng i Yatzee den " + dato +"")
    file.close()

def main():
    poeng = 0

    for i in range (1,7):
        print("\nDu vil nå ha flest mulig av ",i)
        mitt_kast = kast()
        poeng += faseEn(mitt_kast, i)
    poeng += bonus(poeng)
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil nå ha ett par:")
    mitt_kast = kast()
    tempPoeng = like(mitt_kast,2)
    poeng += tempPoeng
    print("Du fikk",tempPoeng,"poeng for ett par")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha to par:")
    mitt_kast = kast()
    tempPoeng = toPar(mitt_kast)
    poeng += tempPoeng
    print("Du fikk",tempPoeng,"poeng for to par")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha tre like:")
    mitt_kast = kast()
    tempPoeng = like(mitt_kast,3)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for tre like")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha fire like:")
    mitt_kast = kast()
    tempPoeng = like(mitt_kast,4)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for fire like")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha liten straight:")
    mitt_kast = kast()
    tempPoeng = litenStraight(mitt_kast)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for liten straight")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha stor straight:")
    mitt_kast = kast()
    tempPoeng = storStraight(mitt_kast)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for stor straight")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha fullt hus:")
    mitt_kast = kast()
    tempPoeng = hus(mitt_kast)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for hus")
    print("Du har nå ", poeng, " poeng")

    print("\nDette er sjanse:")
    mitt_kast = kast()
    tempPoeng = sum(mitt_kast)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for sjanse")
    print("Du har nå ", poeng, " poeng")

    print("\nDu vil ha Yatzee!:")
    mitt_kast = kast()
    tempPoeng = yatzee(mitt_kast)
    poeng += tempPoeng
    print("Du fikk ", tempPoeng," poeng for Yatzee")
    print("Din totale score ble ", poeng, " poeng")

    saveScore(poeng)

main()
