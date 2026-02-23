import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PoemSection from "@/components/PoemSection";

export const metadata: Metadata = {
  title: "Futility",
  description:
    "Analisi completa della poesia 'Futility' di Wilfred Owen: testo originale, analisi strofa per strofa, temi e figure retoriche.",
};

const stanzas = [
  {
    number: 1,
    text: `Move him into the sun—
Gently its touch awoke him once,
At home, whispering of fields half-sown.
Always it woke him, even in France,
Until this morning and this snow.
If anything might rouse him now
The kind old sun will know.`,
    analysis: `La poesia si apre con un imperativo quieto, quasi sussurrato: «Move him into the sun» — «Spostatelo al sole». Non è un ordine militare, ma un gesto di tenerezza disperata. Un soldato è caduto e i compagni lo spostano nella speranza impossibile che la luce del sole possa risvegliarlo.

Owen personifica il sole come una presenza benevola e familiare: il suo tocco «gentile» svegliava il soldato a casa, nei campi «seminati a metà» — un'immagine che evoca la vita interrotta, il lavoro agricolo lasciato incompiuto, la normalità perduta.

L'avverbio «Always» (sempre) apre il quarto verso con forza: il sole lo svegliava sempre, persino in Francia — cioè persino al fronte. Ma l'eccezione brutale arriva con «Until this morning and this snow»: fino a questa mattina, fino a questa neve. La congiunzione «and» lega il tempo e il luogo della morte in un binomio glaciale.

L'ultima invocazione — «il vecchio sole gentile saprà» — oscilla tra la speranza e l'ammissione di impotenza. Il sole è «kind» (gentile) e «old» (vecchio, saggio), quasi una divinità naturale. Ma il lettore sa già che nessun sole potrà svegliare un morto.`,
  },
  {
    number: 2,
    text: `Think how it wakes the seeds—
Woke once the clays of a cold star,
Think of it,—not too hard to stir?
The limbs, so dear-achieved,
Are sides too hard to turn?
Was it for this the clay grew tall?
—O what made fatuous sunbeams toil
To break earth's sleep at all?`,
    analysis: `La seconda strofa allarga la prospettiva dall'individuo all'universale. Owen invita a «pensare» — il verbo «Think» appare due volte — al potere cosmico del sole: è la stessa forza che risveglia i semi nella terra, che un tempo animò «le argille di una stella fredda», dando forma alla vita stessa sulla Terra.

La domanda retorica «not too hard to stir?» (non troppo difficile da muovere?) è straziante nella sua ironia: se il sole ha potuto creare la vita dal nulla, come può non riuscire a risvegliare un singolo corpo? Gli arti del soldato sono «dear-achieved» — raggiunti con fatica, preziosi, il risultato di milioni di anni di evoluzione — e ora giacciono immobili.

«Was it for this the clay grew tall?» è il verso centrale della poesia e una delle domande più potenti della letteratura di guerra: «È per questo che l'argilla è cresciuta fino a diventare alta?». L'argilla è sia la materia biblica della creazione sia il fango delle trincee — il corpo umano nasce dalla terra e alla terra ritorna, ma il percorso dalla creazione alla distruzione appare ora assurdo, insensato.

I versi finali esplodono in una domanda cosmica di disperazione: «O what made fatuous sunbeams toil / To break earth's sleep at all?» — «Cosa ha spinto gli sciocchi raggi del sole a faticare per rompere il sonno della terra?». L'aggettivo «fatuous» (sciocco, vano) è devastante: il sole, fino a un verso prima «kind» e «old», diventa improvvisamente insensato. Se la creazione porta alla distruzione, allora la creazione stessa è stata un atto futile.

La domanda resta senza risposta — ed è proprio questo silenzio a rendere la poesia così potente.`,
  },
];

export default function FutilityPage() {
  return (
    <>
      <PageHeader
        title="Futility"
        subtitle="«Era per questo che l'argilla è cresciuta?» — Una meditazione sulla vanità della creazione"
      />

      {/* Battlefield image banner */}
      <div className="relative w-full h-48 md:h-64 mb-16 overflow-hidden">
        <Image
          src="/images/chateau-wood.jpg"
          alt="Chateau Wood, Ypres, 1917 — il paesaggio devastato del fronte occidentale"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Context */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Contesto
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <p>
            <em>Futility</em> fu scritta probabilmente nel maggio 1918, durante
            l&apos;ultimo periodo di attività poetica di Owen prima del ritorno
            al fronte. Fu pubblicata per la prima volta il 15 giugno 1918
            sulla rivista <em>The Nation</em>, insieme a <em>Hospital Barge</em>,
            diventando una delle poche poesie pubblicate mentre Owen era ancora
            in vita.
          </p>
          <p>
            La poesia è un sonetto atipico di quattordici versi divisi in due
            strofe di sette versi ciascuna. Questa struttura bipartita riflette
            il movimento del pensiero di Owen: dalla speranza concreta (spostare
            il soldato al sole) alla disperazione cosmica (mettere in
            discussione il senso stesso della creazione).
          </p>
          <p>
            A differenza della rabbia esplicita di <em>Dulce et Decorum Est</em>,{" "}
            <em>Futility</em> opera attraverso la dolcezza, il sussurro e la
            domanda. È una poesia di compassione che si trasforma in
            un&apos;interrogazione filosofica sull&apos;intera esistenza umana.
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
            <em>Futility</em>
          </div>
          <div>
            <span className="font-semibold text-foreground">Anno / Raccolta:</span>{" "}
            pubblicata nel 1918
          </div>
          <div>
            <span className="font-semibold text-foreground">Contesto storico:</span>{" "}
            Prima guerra mondiale
          </div>
        </div>
      </section>

      {/* Struttura e Forma */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Struttura e forma
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <div>
            <span className="font-semibold text-foreground">Genere poetico:</span>{" "}
            poesia di guerra, costituita da 2 strofe
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di strofe:</span>{" "}
            1ª strofa: 7 versi — 2ª strofa: 7 versi
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di versi:</span>{" "}
            verso libero
          </div>
          <div>
            <span className="font-semibold text-foreground">Tipo di rime:</span>{" "}
            1ª strofa: rima incatenata — 2ª strofa: rima alternata
          </div>
          <div>
            <span className="font-semibold text-foreground">Ritmo:</span>{" "}
            spezzato
          </div>
          <div>
            <span className="font-semibold text-foreground">Enjambement:</span>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>1ª strofa, vv. 6-7: <em>rouse him now / The kind old sun</em></li>
              <li>2ª strofa, vv. 3-4: <em>are sides / Full-nerved</em></li>
              <li>2ª strofa, vv. 6-7: <em>sunbeams toil / To break</em></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-foreground">Campo semantico prevalente:</span>{" "}
            contrasto tra la vita e la morte
          </div>
        </div>
      </section>

      {/* Full poem */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Testo completo
        </h2>
        <blockquote className="poem-text border-l-2 border-accent/40 pl-6 py-4 text-foreground/80">
          <p>
            Move him into the sun—
            <br />
            Gently its touch awoke him once,
            <br />
            At home, whispering of fields half-sown.
            <br />
            Always it woke him, even in France,
            <br />
            Until this morning and this snow.
            <br />
            If anything might rouse him now
            <br />
            The kind old sun will know.
          </p>
          <p>
            Think how it wakes the seeds—
            <br />
            Woke once the clays of a cold star,
            <br />
            Think of it,—not too hard to stir?
            <br />
            The limbs, so dear-achieved,
            <br />
            Are sides too hard to turn?
            <br />
            Was it for this the clay grew tall?
            <br />
            —O what made fatuous sunbeams toil
            <br />
            To break earth&apos;s sleep at all?
          </p>
        </blockquote>
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
              L&apos;inutilità — <em>Futility</em>
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Il tema centrale è racchiuso nel titolo: la futilità, l&apos;inutilità
              assoluta. Non solo della morte di un singolo soldato, ma
              dell&apos;intera impresa della creazione. Se la vita può essere
              distrutta con tanta facilità, a che scopo è stata creata?
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Il sole come simbolo ambivalente
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Il sole è il filo conduttore della poesia e subisce una
              trasformazione radicale. Nella prima strofa è «kind» (gentile) e
              «old» (saggio), una forza benevola e materna. Nella seconda
              diventa «fatuous» (sciocco, vano) — il suo potere creativo è
              vanificato dalla guerra. Il sole rappresenta sia la natura
              creatrice sia la sua impotenza di fronte alla distruzione umana.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              Dalla compassione alla filosofia
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Owen parte da un gesto intimo e concreto — spostare un corpo al
              sole — e arriva a interrogare il senso dell&apos;esistenza. Questo
              movimento dal particolare all&apos;universale è caratteristico
              della sua migliore poesia: il dolore individuale diventa domanda
              cosmica.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-semibold text-foreground mb-2">
              L&apos;argilla e la creazione
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              L&apos;immagine dell&apos;argilla (<em>clay</em>) richiama
              simultaneamente il racconto biblico della creazione (Dio che plasma
              l&apos;uomo dall&apos;argilla) e la realtà materiale del fango
              delle trincee. Il corpo umano, «dear-achieved» (raggiunto con
              fatica, prezioso), è il risultato di un processo cosmico che la
              guerra rende assurdo.
            </p>
          </div>
        </div>
      </section>

      {/* Figures of speech */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
          Figure retoriche principali
        </h2>

        {/* Figure di suono */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di suono</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Allitterazione</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>snow / sun / stir</em>» — la ripetizione di suoni
              consonantici serve a legare i concetti o a ricreare suoni
              ambientali (come il sibilo del freddo).
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Assonanza e consonanza</h4>
            <p className="text-foreground/80 leading-relaxed">
              Owen utilizza la <em>half-rhyme</em> (rima imperfetta) — una sua
              cifra stilistica distintiva — in coppie come «once/France»,
              «seeds/sides», «star/stir», «tall/toil». Queste rime
              «sbagliate» creano un senso di disarmonia e disagio che riflette
              il contenuto tematico: in un mondo rotto dalla guerra, nemmeno
              le rime possono essere perfette.
            </p>
          </div>
        </div>

        {/* Figure di significato */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di significato</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Personificazione</h4>
            <p className="text-foreground/80 leading-relaxed">
              «<em>the sun — Gently its touch awoke him once</em>» — il Sole
              che sveglia e sussurra. Si attribuiscono caratteristiche umane a
              un elemento naturale.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Metafora</h4>
            <p className="text-foreground/80 leading-relaxed">
              L&apos;uomo chiamato «<em>clay</em>» (argilla). Indica la fragilità
              e l&apos;origine materiale dell&apos;essere umano.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Simbolismo</h4>
            <p className="text-foreground/80 leading-relaxed">
              Il sole è il filo conduttore della poesia e subisce una
              trasformazione radicale: nella prima strofa è «kind» (gentile) e
              «old» (saggio), una forza benevola; nella seconda diventa
              «fatuous» (sciocco, vano). Rappresenta sia la natura creatrice
              sia la sua impotenza di fronte alla distruzione umana.
            </p>
          </div>
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Antitesi</h4>
            <p className="text-foreground/80 leading-relaxed">
              Il contrasto tra il calore del sole («<em>kind sun</em>»,
              «<em>warmth</em>») e il freddo della morte e della neve
              («<em>snow</em>», «<em>cold</em>»). La poesia si regge su coppie
              oppositive: sole e neve, vita e morte, casa e fronte, creazione
              e distruzione.
            </p>
          </div>
        </div>

        {/* Figure di ordine */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">Figure di ordine</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-accent/30 pl-6">
            <h4 className="font-semibold text-foreground mb-2">Enjambement</h4>
            <p className="text-foreground/80 leading-relaxed">
              Owen spezza il verso in punti chiave: «<em>rouse him now / The
              kind old sun</em>» (vv. 6-7), «<em>are sides / Full-nerved</em>»
              (vv. 3-4, 2ª strofa), «<em>sunbeams toil / To break</em>»
              (vv. 6-7, 2ª strofa). Queste fratture ritmiche rispecchiano la
              frammentazione emotiva e la tensione tra speranza e disperazione.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison with Dulce */}
      <section className="mb-16 p-8 bg-surface border border-accent/10">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          Confronto con <em>Dulce et Decorum Est</em>
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <p>
            Le due poesie rappresentano i due volti della poesia di Owen.{" "}
            <em>Dulce et Decorum Est</em> è un grido di rabbia: descrittiva,
            violenta, accusatoria, rivolta verso un destinatario preciso.{" "}
            <em>Futility</em> è un sussurro di dolore: meditativa, tenera,
            universale, rivolta verso l&apos;infinito.
          </p>
          <p>
            Se <em>Dulce</em> denuncia la menzogna della propaganda,{" "}
            <em>Futility</em> va oltre: non si limita a criticare la guerra, ma
            mette in discussione il senso stesso dell&apos;esistenza in un mondo
            capace di tanta distruzione. Insieme, le due poesie offrono il
            ritratto completo di un poeta che ha guardato nell&apos;abisso della
            guerra e ne è emerso con una voce che ancora oggi non smette di
            interrogarci.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-accent/20">
        <Link
          href="/dulce-et-decorum-est"
          className="text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          ← Dulce et Decorum Est
        </Link>
        <Link
          href="/author"
          className="text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Biografia →
        </Link>
      </div>
    </>
  );
}
