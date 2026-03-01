import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/poem/Header";
import PoemSection from "@/components/PoemSection";

export const metadata: Metadata = {
  title: "Dulce et Decorum Est",
  description:
    "Analisi completa della poesia 'Dulce et Decorum Est' di Wilfred Owen: testo originale, analisi strofa per strofa, temi e figure retoriche.",
};

const stanzas = [
  {
    number: 1,
    text: `Bent double, like old beggars under sacks,
Knock-kneed, coughing like hags, we cursed through sludge,
Till on the haunting flares we turned our backs,
And towards our distant rest began to trudge.
Men marched asleep. Many had lost their boots,
But limped on, blood-shod. All went lame; all blind;
Drunk with fatigue; deaf even to the hoots
Of gas-shells dropping softly behind.`,
    paraphrase: `Curvi in due, come vecchi mendicanti sotto i sacchi, con le ginocchia che si toccano, tossendo come vecchie megere, avanzavamo imprecando nel fango, finché voltammo le spalle ai razzi illuminanti che ci perseguitavano e cominciammo a trascinarci verso il lontano luogo di riposo. Gli uomini marciavano addormentati. Molti avevano perso gli stivali, ma zoppicavano avanti, con i piedi calzati di sangue. Tutti andavano zoppi; tutti ciechi; ubriachi di stanchezza; sordi persino ai fischi dei proiettili al gas che cadevano piano alle nostre spalle.`,
    analysis: `La poesia si apre con un'immagine potente di degradazione fisica e morale. I soldati non sono eroi gloriosi: sono paragonati a «vecchi mendicanti» curvi sotto il peso dei loro sacchi e a «vecchie megere» che tossiscono. Owen demolisce fin dal primo verso ogni idealizzazione romantica della guerra.

Il ritmo stesso dei versi è pesante, affaticato, quasi trascinato — rispecchia il passo lento e sfinito della marcia. Le parole «knock-kneed» (con le ginocchia che si toccano) e «blood-shod» (con i piedi avvolti nel sangue al posto delle scarpe) costruiscono un quadro di sofferenza fisica estrema.

L'accumulo di aggettivi negativi — «lame» (zoppi), «blind» (ciechi), «deaf» (sordi), «drunk with fatigue» (ubriachi di stanchezza) — trasforma i soldati in figure quasi inumane, private di ogni dignità. L'ultimo verso introduce con inquietante leggerezza i proiettili al gas che cadono «softly» (piano) alle loro spalle, preparando il dramma della strofa successiva.`,
  },
  {
    number: 2,
    text: `Gas! GAS! Quick, boys!—An ecstasy of fumbling
Fitting the clumsy helmets just in time,
But someone still was yelling out and stumbling
And flound'ring like a man in fire or lime.—
Dim through the misty panes and thick green light,
As under a green sea, I saw him drowning.`,
    paraphrase: `Gas! GAS! Presto, ragazzi! — Un'estasi di gesti frenetici per infilare le goffe maschere appena in tempo, ma qualcuno ancora urlava e inciampava, dibattendosi come un uomo nel fuoco o nella calce viva. — Confusamente, attraverso i vetri appannati e la densa luce verde, come sotto un mare verde, lo vidi annegare.`,
    analysis: `Il tono cambia brutalmente. L'allarme «Gas! GAS!» irrompe con urgenza — il passaggio dalle minuscole alle maiuscole mima il crescere del panico. L'espressione «ecstasy of fumbling» è un ossimoro geniale: l'estasi è quella del terrore, non del piacere, e il «fumbling» (armeggiare goffamente) con le maschere anti-gas rivela la disperazione del momento.

Un soldato non riesce a indossare la maschera in tempo. Owen lo descrive come un uomo che annega: «flound'ring like a man in fire or lime» (che si dibatte come un uomo nel fuoco o nella calce viva). La similitudine è duplice e orrifica.

Gli ultimi due versi introducono la prospettiva in prima persona di Owen: attraverso i vetri appannati della propria maschera anti-gas, vede il compagno morire in un «mare verde» — il cloro che riempie l'aria. L'immagine dell'annegamento in un mare di gas è tra le più memorabili della poesia di guerra.`,
  },
  {
    number: 3,
    text: `In all my dreams before my helpless sight,
He plunges at me, guttering, choking, drowning.`,
    paraphrase: `In tutti i miei sogni, davanti ai miei occhi impotenti, si getta verso di me, tremolando come una candela che si spegne, soffocando, annegando.`,
    analysis: `Questi due versi isolati costituiscono una pausa traumatica. Owen si sposta nel tempo: non è più nella trincea, ma nei suoi incubi. L'immagine del soldato morente lo perseguita — «before my helpless sight» (davanti ai miei occhi impotenti).

I tre participi in climax ascendente — «guttering, choking, drowning» (che si spegne come una candela, che soffoca, che annega) — racchiudono tutta l'agonia della morte per gas. Il verbo «guttering», mutuato dalla candela che si spegne, è particolarmente efficace: riduce la vita umana a una fiammella tremolante.

Questa strofa-cerniera introduce anche il tema del trauma del sopravvissuto, anticipando di decenni la comprensione clinica del disturbo post-traumatico.`,
  },
  {
    number: 4,
    text: `If in some smothering dreams, you too could pace
Behind the wagon that we flung him in,
And watch the white eyes writhing in his face,
His hanging face, like a devil's sick of sin;
If you could hear, at every jolt, the blood
Come gargling from the froth-corrupted lungs,
Obscene as cancer, bitter as the cud
Of vile, incurable sores on innocent tongues,—
My friend, you would not tell with such high zest
To children ardent for some desperate glory,
The old Lie: Dulce et decorum est
Pro patria mori.`,
    paraphrase: `Se in qualche sogno soffocante anche tu potessi camminare dietro il carro su cui lo gettammo, e guardare gli occhi bianchi contorcersi nel suo volto, il suo volto penzolante, come quello di un diavolo disgustato dal peccato; se potessi sentire, a ogni sobbalzo, il sangue gorgogliare dai polmoni corrotti dalla schiuma, osceno come il cancro, amaro come il rigurgito di piaghe infette e incurabili su lingue innocenti, — amico mio, non racconteresti con tanto entusiasmo ai ragazzi ardenti di una qualche disperata gloria, la vecchia Menzogna: è dolce e onorevole morire per la patria.`,
    analysis: `L'ultima e più lunga strofa è una sfida diretta al lettore — e in particolare a chi propaga la retorica della guerra gloriosa. Owen usa il «you» con violenza retorica: costringe il destinatario a guardare, a seguire il carro su cui è stato gettato il corpo del soldato.

Le immagini sono volutamente repulsive: gli occhi bianchi che si contorcono, il viso stravolto «come quello di un diavolo disgustato dal peccato», il sangue che gorgoglia dai polmoni corrotti dalla schiuma del gas. Owen non risparmia nulla: il linguaggio è medico, viscerale, osceno per scelta precisa. Vuole che il lettore provi lo stesso disgusto fisico.

Le similitudini finali — «obscene as cancer» (osceno come il cancro), «bitter as the cud / Of vile, incurable sores on innocent tongues» (amaro come il rigurgito di piaghe infette su lingue innocenti) — raggiungono un apice di brutalità poetica.

Poi arriva il colpo finale: l'apostrofe «My friend» è sarcastica, quasi un'accusa. E la «vecchia Menzogna» viene finalmente svelata: «Dulce et decorum est / Pro patria mori» — «È dolce e onorevole morire per la patria», la frase di Orazio che per secoli aveva giustificato il sacrificio bellico. Owen la chiama per quello che è: una bugia.`,
  },
];

export default function DulcePage() {
  return (
    <>
      <PageHeader
        title="Dulce et Decorum Est"
        subtitle="«È dolce e onorevole morire per la patria» — La vecchia menzogna smascherata"
      />

      {/* Trench image banner */}
      <div className="relative w-full h-48 md:h-64 mb-16 overflow-hidden">
        <Image
          src="/images/hero-trench.jpg"
          alt="Trincea britannica durante la Battaglia della Somme, 1916"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Contesto */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Contesto
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <p>
            <em>Dulce et Decorum Est</em> fu scritta tra l&apos;ottobre e il
            novembre 1917, durante il soggiorno di Owen al Craiglockhart War
            Hospital, e successivamente revisionata nei mesi seguenti con
            l&apos;aiuto di Siegfried Sassoon. Fu pubblicata postuma nel 1920
            nella raccolta curata dallo stesso Sassoon.
          </p>
          <p>
            Il titolo riprende un verso delle <em>Odi</em> di Orazio (III, 2,
            13): <em>&ldquo;Dulce et decorum est pro patria mori&rdquo;</em> —
            «È dolce e onorevole morire per la patria». Owen definisce questa
            massima «la vecchia Menzogna» (<em>the old Lie</em>), rivoltandone
            il significato attraverso la descrizione cruda di un attacco con il
            gas al cloro.
          </p>
          <p>
            La poesia fu originariamente dedicata a{" "}
            <strong>Jessie Pope</strong>, una poetessa britannica nota per i
            suoi versi propagandistici che esortavano i giovani ad arruolarsi.
            Nella versione finale, Owen sostituì la dedica diretta con un più
            universale <em>&ldquo;My friend&rdquo;</em>, allargando l&apos;accusa
            a chiunque diffondesse la retorica bellicista.
          </p>
        </div>
      </section>

      {/* Dati Generali */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Dati generali
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-foreground/85">
          <div>
            <span className="font-semibold text-foreground">Autore:</span>{" "}
            Wilfred Owen
          </div>
          <div>
            <span className="font-semibold text-foreground">Titolo:</span>{" "}
            <em>Dulce et Decorum Est</em>
          </div>
          <div>
            <span className="font-semibold text-foreground">Anno / Raccolta:</span>{" "}
            scritta nel 1917, pubblicata nel 1920
          </div>
          <div>
            <span className="font-semibold text-foreground">Contesto storico:</span>{" "}
            Prima guerra mondiale
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-ornament max-w-xs mx-auto mb-16">
        <span className="text-accent text-sm">&#10045;</span>
      </div>

      {/* Testo originale */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Testo originale
        </h2>
        <blockquote className="poem-text border-l-2 border-accent/40 pl-6 py-4 text-foreground/80">
          {stanzas.map((s, idx) => (
            <p key={s.number}>
              {s.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < s.text.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </blockquote>
      </section>

      {/* Struttura e Forma */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Struttura e forma
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <div>
            <span className="font-semibold text-foreground">Genere poetico:</span>{" "}
            poesia lirica di guerra, costituita da una struttura irregolare di 4 strofe
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di strofe:</span>{" "}
            1ª strofa: ottava — 2ª strofa: sestina — 3ª strofa: distico — 4ª strofa: 12 versi
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di versi:</span>{" "}
            endecasillabo
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di rime:</span>{" "}
            rima alternata
          </div>
          <div>
            <span className="font-semibold text-foreground">Ritmo:</span>{" "}
            spezzato
          </div>
          <div>
            <span className="font-semibold text-foreground">Enjambement:</span>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>1ª strofa, vv. 7-8: <em>to the hoots / of gas-shells</em></li>
              <li>2ª strofa, vv. 9-10: <em>ecstasy of fumbling / fitting the clumsy helmets</em></li>
              <li>4ª strofa, vv. 17-18: <em>you too could pace / behind the wagon</em></li>
              <li>4ª strofa, vv. 21-22: <em>the blood / come gargling</em></li>
              <li>4ª strofa, vv. 23-24: <em>bitter as the cud / of vile</em></li>
              <li>4ª strofa, vv. 25-26: <em>such high zest / to children ardent</em></li>
              <li>4ª strofa, vv. 27-28: <em>dulce et decorum est / pro patria mori</em></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-foreground">Campo semantico prevalente:</span>{" "}
            sofferenza fisica in guerra
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-ornament max-w-xs mx-auto mb-16">
        <span className="text-accent text-sm">&#10045;</span>
      </div>

      {/* Analisi del testo (parafrasi + analisi strofa per strofa) */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-10">
          Analisi del testo
        </h2>
        {stanzas.map((s) => (
          <PoemSection
            key={s.number}
            stanzaNumber={s.number}
            stanza={s.text}
            paraphrase={s.paraphrase}
            analysis={s.analysis}
          />
        ))}
      </section>

      {/* Divider */}
      <div className="divider-ornament max-w-xs mx-auto mb-16">
        <span className="text-accent text-sm">&#10045;</span>
      </div>

      {/* Figure retoriche */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
          Figure retoriche principali
        </h2>

        {/* Figure di suono */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di suono</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Onomatopea</h4>
            <p className="text-foreground/80 leading-relaxed">
              <em>sludge</em>, <em>trudge</em>, <em>gargling</em> — sono termini
              che sembrano produrre il rumore del fango sotto gli stivali o del
              soffocamento.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Allitterazione</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>Watch the white eyes writhe</em>» — ripetizione del suono «w»
              in parole diverse.
            </p>
          </div>
        </div>

        {/* Figure di significato */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di significato</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Ossimoro</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>dropping softly</em>» — accostamento di due parole con
              significati opposti.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Similitudine</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>Bent double, like old beggars under sacks</em>» — si paragonano
              i soldati a dei vecchi deboli e curvi.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Personificazione</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>tired, outstripped Five-Nines</em>» — si dà vita a un oggetto
              inanimato, in questo caso ai proiettili dei cannoni.
            </p>
          </div>
        </div>

        {/* Figure di ordine */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di ordine</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Climax</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>Gas, GAS!</em>» — le azioni e le descrizioni diventano sempre
              più intense e violente.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Anastrofe (inversione)</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>distant rests</em>» — inversione dell&apos;ordine di due parole.
            </p>
          </div>
        </div>
      </section>

      {/* Linguaggio */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
          Linguaggio
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Immagini forti e sensoriali
            </h3>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
              <li>Owen usa immagini violente e scioccanti: &ldquo;piedi insanguinati&rdquo;, &ldquo;polmoni corrotti dalla schiuma&rdquo;.</li>
              <li>Coinvolge vista, udito e tatto per rendere la sofferenza reale.</li>
            </ul>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Similitudini e metafore
            </h3>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
              <li>&ldquo;Come vecchi mendicanti sotto sacchi&rdquo; → i soldati sono ridotti alla miseria.</li>
              <li>&ldquo;Come un uomo in fiamme o nella calce&rdquo; → il gas è paragonato al fuoco.</li>
              <li>L&apos;immagine dell&apos;annegamento rende la morte lenta e inevitabile.</li>
            </ul>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Uso del &ldquo;tu&rdquo;
            </h3>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
              <li>Il poeta si rivolge direttamente al lettore.</li>
              <li>Questo rende l&apos;accusa personale e morale, soprattutto verso chi esalta la guerra.</li>
            </ul>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Il latino
            </h3>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
              <li>Rappresenta i valori tradizionali e l&apos;educazione classica.</li>
              <li>Il contrasto con le immagini crude smaschera la falsità del motto.</li>
              <li>Chiamandola &ldquo;la vecchia menzogna&rdquo;, Owen la distrugge ideologicamente.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-accent/20">
        <Link
          href="/author"
          className="text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          ← Biografia
        </Link>
        <Link
          href="/futility"
          className="text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Futility →
        </Link>
      </div>
    </>
  );
}
