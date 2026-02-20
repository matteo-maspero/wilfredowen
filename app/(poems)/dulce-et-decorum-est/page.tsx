import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
    analysis: `Il tono cambia brutalmente. L'allarme «Gas! GAS!» irrompe con urgenza — il passaggio dalle minuscole alle maiuscole mima il crescere del panico. L'espressione «ecstasy of fumbling» è un ossimoro geniale: l'estasi è quella del terrore, non del piacere, e il «fumbling» (armeggiare goffamente) con le maschere anti-gas rivela la disperazione del momento.

Un soldato non riesce a indossare la maschera in tempo. Owen lo descrive come un uomo che annega: «flound'ring like a man in fire or lime» (che si dibatte come un uomo nel fuoco o nella calce viva). La similitudine è duplice e orrifica.

Gli ultimi due versi introducono la prospettiva in prima persona di Owen: attraverso i vetri appannati della propria maschera anti-gas, vede il compagno morire in un «mare verde» — il cloro che riempie l'aria. L'immagine dell'annegamento in un mare di gas è tra le più memorabili della poesia di guerra.`,
  },
  {
    number: 3,
    text: `In all my dreams before my helpless sight,
He plunges at me, guttering, choking, drowning.`,
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

      {/* Context */}
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

      {/* Divider */}
      <div className="divider-ornament max-w-xs mx-auto mb-16">
        <span className="text-accent text-sm">&#10045;</span>
      </div>

      {/* Stanza-by-stanza analysis */}
      <section>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-10">
          Analisi del testo
        </h2>
        {stanzas.map((s) => (
          <PoemSection
            key={s.number}
            stanzaNumber={s.number}
            stanza={s.text}
            analysis={s.analysis}
          />
        ))}
      </section>

      {/* Themes */}
      <div className="divider-ornament max-w-xs mx-auto mb-16">
        <span className="text-accent text-sm">&#10045;</span>
      </div>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
          Temi principali
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              L&apos;orrore reale della guerra
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Owen sostituisce la visione eroica e romantica della guerra con
              una rappresentazione cruda, fisica, quasi clinica della
              sofferenza. I soldati non sono cavalieri: sono corpi che
              sanguinano, soffocano e muoiono in modo atroce.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              La critica alla propaganda
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              L&apos;intera poesia è costruita come un&apos;argomentazione
              contro la retorica patriottica. La struttura stessa — dalla
              descrizione della marcia all&apos;attacco, dal trauma alla sfida
              finale — è pensata per demolire la «vecchia Menzogna» pezzo per
              pezzo.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Il trauma del testimone
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              La terza strofa, con i suoi incubi ricorrenti, anticipa la
              comprensione moderna del disturbo post-traumatico. Owen non è solo
              un poeta che descrive: è un sopravvissuto che rivive
              ossessivamente il momento della morte del compagno.
            </p>
          </div>
        </div>
      </section>

      {/* Figures of speech */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
          Figure retoriche chiave
        </h2>
        <div className="space-y-6">
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">Similitudine</h3>
            <p className="text-foreground/80 leading-relaxed">
              «Like old beggars», «like a man in fire or lime», «like a
              devil&apos;s sick of sin» — le similitudini di Owen sono sempre
              degradanti, anti-eroiche, e servono a strappare ogni velo di
              nobiltà dalla guerra.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">Ossimoro</h3>
            <p className="text-foreground/80 leading-relaxed">
              «An ecstasy of fumbling» — l&apos;accostamento di estasi (parola
              positiva, quasi mistica) e armeggiare goffo crea un cortocircuito
              semantico che esprime perfettamente il panico del momento.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Ironia e rovesciamento
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Il titolo stesso è la più grande ironia dell&apos;opera: le parole
              di Orazio, pronunciate per glorificare il sacrificio, vengono usate
              per condannarlo. Owen trasforma un motto celebrativo in
              un&apos;accusa.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Climax e accumulo
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              «Guttering, choking, drowning» — la serie ascendente di participi
              mima l&apos;aggravarsi dell&apos;agonia. Allo stesso modo,
              nella prima strofa, l&apos;accumulo di aggettivi costruisce un
              crescendo di degradazione.
            </p>
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
