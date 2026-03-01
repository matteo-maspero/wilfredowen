import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Poem from "@/components/poem/Poem";
import Header from "@/components/poem/Header";
import Section from "@/components/poem/Section";
import InfoList from "@/components/poem/InfoList";
import AnnotatedBlock from "@/components/poem/AnnotatedBlock";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
	title: "Futility",
	description:
		"Analisi completa della poesia 'Futility' di Wilfred Owen: testo originale, parafrasi, figure retoriche, temi e interpretazione.",
};

const stanzas = [
	{
		text: `Move him into the sun—
Gently its touch awoke him once,
At home, whispering of fields half-sown.
Always it woke him, even in France,
Until this morning and this snow.
If anything might rouse him now
The kind old sun will know.`,
	},
	{
		text: `Think how it wakes the seeds—
Woke once the clays of a cold star.
Are limbs so dear-achieved,
Are sides full-nerved,—still warm,—too hard to stir?
Was it for this the clay grew tall?
—O what made fatuous sunbeams toil
To break earth's sleep at all?`,
	},
];

export default function FutilityPage() {
	return (
		<>
			<Header
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

			{/* 1. Testo originale */}
			<Section title="Testo originale">
				<Poem stanzas={stanzas} />
			</Section>

			{/* 2. Dati generali */}
			<Section title="Dati generali">
				<InfoList
					items={[
						{ label: "Autore", value: "Wilfred Owen (1893–1918)" },
						{ label: "Anno", value: "1918" },
						{
							label: "Raccolta",
							value: (
								<>
									pubblicata su <em>The Nation</em> il 15 giugno 1918; inclusa
									nel volume postumo <em>Poems</em> curato da Siegfried Sassoon
									(1920)
								</>
							),
						},
						{
							label: "Contesto storico",
							value:
								"ultimi mesi della Prima Guerra Mondiale, fronte occidentale. Owen scrisse la poesia probabilmente nel maggio 1918, durante il suo ultimo periodo di attività poetica prima del ritorno al fronte. Fu una delle poche poesie pubblicate mentre l'autore era ancora in vita.",
						},
					]}
				/>
			</Section>

			{/* 3. Struttura e forma */}
			<Section title="Struttura e forma">
				<InfoList
					items={[
						{ label: "Genere", value: "poesia di guerra / elegia" },
						{
							label: "Forma metrica",
							value:
								"sonetto atipico con half-rhymes (rime imperfette), cifra stilistica distintiva di Owen",
						},
						{
							label: "Strofe",
							value: "2 strofe da 7 versi ciascuna",
						},
						{
							label: "Versi",
							value:
								"14 versi totali in verso libero con echi di pentametro giambico",
						},
						{
							label: "Schema rimico",
							value: (
								<>
									1ª strofa: ABCBDEA (rima incatenata) — 2ª strofa: ABABCDC
									(rima alternata). Owen utilizza la <em>half-rhyme</em> in
									coppie come «once / France», «seeds / sides», «star / stir»,
									«tall / toil»
								</>
							),
						},
					]}
				/>
			</Section>

			<Divider />

			{/* 4. Parafrasi */}
			<Section title="Parafrasi">
				<div className="space-y-4 text-foreground/85 leading-relaxed">
					<p>
						<span className="font-semibold text-foreground">
							1ª strofa —{" "}
						</span>
						Spostatelo al sole: il suo tocco gentile lo ha svegliato una volta,
						quando era a casa, sussurrandogli di campi seminati a metà. Il sole
						lo svegliava sempre, persino in Francia, sul fronte — fino a questa
						mattina e questa neve. Se qualcosa può ancora svegliarlo adesso, il
						buon vecchio sole saprà come fare.
					</p>
					<p>
						<span className="font-semibold text-foreground">
							2ª strofa —{" "}
						</span>
						Pensate a come il sole sveglia i semi, a come una volta risvegliò le
						argille di una stella fredda. Pensateci: non è troppo difficile
						scuotere queste membra, ottenute con tanta fatica, questi fianchi
						ancora caldi? È per questo che l&apos;argilla è cresciuta fino a
						diventare alta? Oh, cosa ha spinto gli sciocchi raggi del sole a
						faticare per spezzare il sonno della terra?
					</p>
				</div>
			</Section>

			{/* 5. Comprensione del testo */}
			<Section title="Comprensione del testo">
				<div className="space-y-6">
					<AnnotatedBlock title="1ª strofa — La speranza concreta">
						<p>
							La scena si apre con un gesto semplice e umano: un compagno
							chiede di spostare il corpo di un soldato appena morto sotto il
							sole, nella speranza che il calore possa svegliarlo — come faceva
							a casa, nei campi, e persino sul fronte in Francia. Il sole è
							presentato come una forza benevola, familiare, quasi un vecchio
							amico. Il tono è pacato e speranzoso, ma l&apos;ultimo verso («If
							anything might rouse him now») introduce il dubbio: forse questa
							volta il sole non basterà.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="2ª strofa — La disperazione cosmica">
						<p>
							Il pensiero si allarga: se il sole è capace di risvegliare i semi
							dalla terra e ha dato vita all&apos;intero pianeta partendo
							dall&apos;argilla di una stella fredda, perché non riesce a
							svegliare questo corpo ancora caldo? Owen passa dalla scena
							concreta a una domanda cosmica: se la guerra può annullare ciò che
							la natura ha impiegato milioni di anni a creare, allora a che
							scopo la creazione stessa? L&apos;ultimo distico è un grido
							strozzato di ribellione e resa: i raggi del sole, ora definiti
							«fatuous» (sciocchi, vani), hanno faticato invano.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			<Divider />

			{/* 6. Ritmo */}
			<Section title="Ritmo">
				<div className="space-y-6">
					<AnnotatedBlock title="Andamento">
						<p>
							Lento e meditativo nella prima strofa, dove il ritmo accompagna il
							gesto paziente di spostare il corpo al sole. Nella seconda strofa
							il ritmo si fa più incalzante e frammentato: le domande retoriche
							si susseguono con crescente urgenza, fino all&apos;esclamazione
							finale.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Punteggiatura">
						<p>
							Owen usa il trattino lungo (—) come pausa drammatica: all&apos;inizio
							del primo verso («Move him into the sun—») sospende il comando in
							un silenzio carico di dolore; nell&apos;ultimo verso («—O what made
							fatuous sunbeams toil») segna l&apos;irruzione della disperazione.
							I punti interrogativi della seconda strofa (quattro in sette
							versi) accelerano il ritmo e trasformano la riflessione in
							un&apos;interrogazione incalzante.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Enjambement">
						<ul className="list-disc list-inside space-y-1">
							<li>
								1ª strofa, vv. 6-7:{" "}
								<em>«rouse him now / The kind old sun»</em> — la speranza si
								prolunga oltre il verso, come un respiro trattenuto
							</li>
							<li>
								2ª strofa, vv. 3-4:{" "}
								<em>«so dear-achieved, / Are sides full-nerved»</em> — lo
								spezzamento evidenzia il valore del corpo umano
							</li>
							<li>
								2ª strofa, vv. 6-7:{" "}
								<em>«sunbeams toil / To break»</em> — la fatica del sole si
								spezza tra i versi, mimetica dell&apos;inutilità dello sforzo
							</li>
						</ul>
					</AnnotatedBlock>
				</div>
			</Section>

			{/* 7. Figure retoriche principali */}
			<Section title="Figure retoriche principali">
				{/* Figure di suono */}
				<h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-2 mb-4">
					Figure di suono
				</h3>
				<div className="space-y-6 mb-8">
					<AnnotatedBlock title="Allitterazione">
						<p>
							«<em>snow / sun / stir / seeds / sides / star</em>» — la
							ripetizione del suono /s/ percorre tutta la poesia, legando
							concetti opposti (neve e sole, semi e fianchi) e creando una
							musicalità sibillante che evoca sia il freddo sia la carezza del
							sole.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Assonanza e consonanza (half-rhyme)">
						<p>
							Owen utilizza la <em>half-rhyme</em> (rima imperfetta) — la sua
							cifra stilistica più riconoscibile — in coppie come
							«once / France», «seeds / sides», «star / stir», «tall / toil».
							Queste rime «sbagliate» creano un senso di disarmonia e disagio:
							in un mondo rotto dalla guerra, nemmeno le rime possono essere
							perfette.
						</p>
					</AnnotatedBlock>
				</div>

				{/* Figure di significato */}
				<h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">
					Figure di significato
				</h3>
				<div className="space-y-6 mb-8">
					<AnnotatedBlock title="Personificazione">
						<p>
							«<em>the kind old sun</em>», «<em>Gently its touch awoke him</em>
							», «<em>whispering of fields</em>» — il sole tocca, sveglia,
							sussurra, conosce. Owen lo trasforma in una figura paterna,
							benevola e impotente.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Metafora">
						<p>
							L&apos;uomo come «<em>clay</em>» (argilla): «<em>the clay grew
							tall</em>». Owen richiama il mito della creazione biblica
							(l&apos;uomo plasmato dall&apos;argilla) per indicare la fragilità
							e l&apos;origine terrena dell&apos;essere umano — e la
							mostruosità di distruggerlo.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Simbolismo">
						<p>
							Il sole subisce una trasformazione radicale tra le due strofe:
							nella prima è «<em>kind</em>» (gentile) e «<em>old</em>»
							(saggio), una forza benevola; nella seconda diventa «
							<em>fatuous</em>» (sciocco, vano). Rappresenta sia la natura
							creatrice sia la sua impotenza di fronte alla distruzione umana.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Antitesi">
						<p>
							Il contrasto tra il calore del sole («<em>kind sun</em>», «
							<em>woke him</em>») e il freddo della morte («<em>snow</em>», «
							<em>cold star</em>»). La poesia si regge su coppie oppositive:
							sole/neve, vita/morte, casa/fronte, creazione/distruzione.
						</p>
					</AnnotatedBlock>
				</div>

				{/* Figure di ordine */}
				<h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">
					Figure di ordine
				</h3>
				<div className="space-y-6">
					<AnnotatedBlock title="Climax e anticlimax">
						<p>
							La prima strofa costruisce un <em>climax</em> di speranza: il sole
							che svegliava a casa → che svegliava in Francia → che forse
							sveglierà anche ora. La seconda strofa inverte il movimento in un{" "}
							<em>anticlimax</em>: dal potere cosmico del sole (sveglia i semi,
							ha dato vita alla Terra) alla sua impotenza davanti a un corpo
							morto, fino al crollo finale nel termine «fatuous».
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Domande retoriche">
						<p>
							La seconda strofa è dominata da quattro domande retoriche che non
							attendono risposta: «<em>Are limbs so dear-achieved…?</em>», «
							<em>Are sides…too hard to stir?</em>», «
							<em>Was it for this the clay grew tall?</em>», «
							<em>O what made fatuous sunbeams toil…?</em>». Ogni domanda
							amplifica lo sconcerto, trasformando la meditazione privata in
							un&apos;accusa universale.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			<Divider />

			{/* 8. Campo semantico prevalente */}
			<Section title="Campo semantico prevalente">
				<div className="space-y-6">
					<AnnotatedBlock title="Vita e calore">
						<p>
							<em>sun</em>, <em>touch</em>, <em>awoke</em>, <em>whispering</em>
							, <em>fields half-sown</em>, <em>seeds</em>, <em>warm</em>,{" "}
							<em>wakes</em>, <em>grew tall</em> — un lessico di crescita,
							risveglio, fertilità legato al mondo naturale e alla vita
							contadina.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Morte e freddo">
						<p>
							<em>snow</em>, <em>cold star</em>, <em>clay</em>, <em>sleep</em>,{" "}
							<em>fatuous</em> — parole che evocano immobilità, gelo, vanità.
							Il corpo del soldato appartiene ormai a questo campo.
						</p>
					</AnnotatedBlock>
					<p className="text-foreground/85 leading-relaxed mt-4">
						Il contrasto tra questi due poli semantici — vita/calore contro
						morte/freddo — è il motore dell&apos;intera poesia. Il sole, che
						nasce nel campo della vita, scivola progressivamente verso
						l&apos;impotenza, e con lui l&apos;intera logica della creazione.
					</p>
				</div>
			</Section>

			{/* 9. Temi centrali */}
			<Section title="Temi centrali">
				<div className="space-y-6">
					<AnnotatedBlock title="La futilità della guerra e della creazione">
						<p>
							Il tema portante, condensato nel titolo: se la guerra può
							annullare in un istante ciò che la natura ha costruito in milioni
							di anni, allora l&apos;intero processo della creazione è vano.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Natura e morte">
						<p>
							Il sole — simbolo di vita e di potere creatore — si rivela
							impotente di fronte alla morte causata dall&apos;uomo. La natura
							non è una forza salvifica: può creare ma non proteggere.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Il valore e la fragilità del corpo umano">
						<p>
							Le membra «<em>dear-achieved</em>» (ottenute con fatica), i
							fianchi «<em>full-nerved</em>» e «<em>still warm</em>»: Owen
							insiste sulla meraviglia biologica del corpo umano per rendere più
							intollerabile la sua distruzione.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Dalla speranza alla disperazione">
						<p>
							Il movimento emotivo della poesia — dal gesto tenero di spostare
							il compagno al sole fino al grido cosmico finale — traccia il
							percorso di un lutto che si trasforma in crisi esistenziale.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			<Divider />

			{/* 10. Linguaggio e stile */}
			<Section title="Linguaggio e stile">
				<div className="space-y-6">
					<AnnotatedBlock title="Tonalità e registro">
						<p>
							Il tono compie una trasformazione radicale: si apre gentile e
							speranzoso, poi diventa triste e rassegnato, infine rabbioso e
							cosmico. Il registro parte descrittivo e minimale (1ª strofa) per
							approdare a un piano filosofico ed esistenziale (2ª strofa).
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Lessico">
						<p>
							Nella prima strofa il lessico è semplice e concreto: <em>sun</em>,{" "}
							<em>home</em>, <em>fields</em>, <em>snow</em> — parole
							quotidiane, vicine alla vita del soldato. Nella seconda il
							vocabolario si espande al cosmico: <em>seeds</em>,{" "}
							<em>clays of a cold star</em>, <em>earth&apos;s sleep</em> — Owen
							dilata la prospettiva dall&apos;individuo all&apos;universo.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Musicalità">
						<p>
							Rime imperfette, assonanze, consonanze e vocali aperte costruiscono
							una musicalità sottile e dissonante. Il suono stesso dei versi
							trasmette disagio e frammentazione: in un mondo rotto dalla
							guerra, nemmeno la forma sonora può essere armoniosa.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Domande retoriche come strumento stilistico">
						<p>
							La seconda strofa non contiene quasi nessuna affermazione: è
							interamente costruita su domande senza risposta. Questo
							procedimento trasforma il lettore in testimone impotente,
							costretto a confrontarsi con l&apos;assurdità senza il conforto
							di una spiegazione.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			{/* 11. Messaggio e interpretazione */}
			<Section title="Messaggio e interpretazione">
				<div className="space-y-4 text-foreground/85 leading-relaxed">
					<p>
						Owen non denuncia la guerra con rabbia esplicita, come in{" "}
						<em>Dulce et Decorum Est</em>, ma con dolore e incredulità. Parte da
						un gesto concreto e umano — spostare il corpo di un compagno al sole
						— per arrivare a mettere in discussione il senso dell&apos;intera
						creazione.
					</p>
					<p>
						Se il sole, che ha dato vita a tutto ciò che esiste, non può
						risvegliare un solo soldato, allora la promessa stessa della
						natura è una menzogna. Il titolo — <em>Futility</em>, «inutilità»
						— racchiude la risposta alle domande che la poesia pone: tutto è
						vano se la guerra può annullare in un istante ciò che il cosmo ha
						impiegato milioni di anni a costruire.
					</p>
					<p>
						La forza della poesia sta nella sua delicatezza: non è un grido ma
						un sussurro che si spezza, un lamento che diventa domanda
						universale. Owen ci lascia senza risposta — e proprio in questo
						silenzio risiede il suo messaggio più potente.
					</p>
				</div>
			</Section>

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
