import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/poem/Header";
import Poem from "@/components/poem/Poem";
import Section from "@/components/poem/Section";
import InfoList from "@/components/poem/InfoList";
import AnnotatedBlock from "@/components/poem/AnnotatedBlock";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
	title: "Dulce et Decorum Est",
	description:
		"Analisi completa della poesia 'Dulce et Decorum Est' di Wilfred Owen: testo originale, parafrasi, figure retoriche, temi e interpretazione.",
};

const stanzas = [
	{
		text: `Bent double, like old beggars under sacks,
Knock-kneed, coughing like hags, we cursed through sludge,
Till on the haunting flares we turned our backs,
And towards our distant rest began to trudge.
Men marched asleep. Many had lost their boots,
But limped on, blood-shod. All went lame; all blind;
Drunk with fatigue; deaf even to the hoots
Of gas-shells dropping softly behind.`,
	},
	{
		text: `Gas! GAS! Quick, boys!—An ecstasy of fumbling
Fitting the clumsy helmets just in time,
But someone still was yelling out and stumbling
And flound'ring like a man in fire or lime.—
Dim through the misty panes and thick green light,
As under a green sea, I saw him drowning.`,
	},
	{
		text: `In all my dreams before my helpless sight,
He plunges at me, guttering, choking, drowning.`,
	},
	{
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
	},
];

export default function DulcePage() {
	return (
		<>
			<Header
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

			{/* 1. Testo originale */}
			<Section title="Testo originale">
				<Poem stanzas={stanzas} />
			</Section>

			{/* 2. Dati generali */}
			<Section title="Dati generali">
				<InfoList
					items={[
						{ label: "Autore", value: "Wilfred Owen (1893–1918)" },
						{
							label: "Anno",
							value: "scritta tra ottobre e novembre 1917, pubblicata postuma nel 1920",
						},
						{
							label: "Raccolta",
							value: (
								<>
									inclusa nel volume postumo <em>Poems</em> curato da Siegfried
									Sassoon (1920). Il titolo riprende un verso delle{" "}
									<em>Odi</em> di Orazio (III, 2, 13)
								</>
							),
						},
						{
							label: "Contesto storico",
							value: (
								<>
									Prima Guerra Mondiale, fronte occidentale. Owen scrisse la
									poesia durante il soggiorno al Craiglockhart War Hospital,
									dove era ricoverato per <em>shell shock</em>. Fu
									originariamente dedicata a Jessie Pope, poetessa
									propagandista, poi indirizzata a un più universale «
									<em>My friend</em>» — chiunque diffondesse la retorica
									bellicista
								</>
							),
						},
					]}
				/>
			</Section>

			{/* 3. Struttura e forma */}
			<Section title="Struttura e forma">
				<InfoList
					items={[
						{
							label: "Genere",
							value: "poesia lirica di guerra / invettiva anti-bellicista",
						},
						{
							label: "Forma metrica",
							value:
								"struttura irregolare ispirata al sonetto, con rima alternata (ABABCDCD) e pentametro giambico",
						},
						{
							label: "Strofe",
							value:
								"4 strofe: 1ª ottava (8 vv.) — 2ª sestina (6 vv.) — 3ª distico (2 vv.) — 4ª dodici versi (12 vv.)",
						},
						{
							label: "Versi",
							value: "28 versi totali in pentametro giambico (con variazioni)",
						},
						{
							label: "Schema rimico",
							value: (
								<>
									rima alternata ABAB prevalente in tutte le strofe. Owen
									mantiene una struttura formale rigorosa che contrasta con la
									brutalità del contenuto — la forma «classica» amplifica
									l&apos;ironia del titolo latino
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
						Curvi in due, come vecchi mendicanti sotto i sacchi, con le
						ginocchia che si toccano, tossendo come vecchie megere, avanzavamo
						imprecando nel fango, finché voltammo le spalle ai razzi illuminanti
						che ci perseguitavano e cominciammo a trascinarci verso il lontano
						luogo di riposo. Gli uomini marciavano addormentati. Molti avevano
						perso gli stivali, ma zoppicavano avanti, con i piedi calzati di
						sangue. Tutti andavano zoppi; tutti ciechi; ubriachi di stanchezza;
						sordi persino ai fischi dei proiettili al gas che cadevano piano alle
						nostre spalle.
					</p>
					<p>
						<span className="font-semibold text-foreground">
							2ª strofa —{" "}
						</span>
						Gas! GAS! Presto, ragazzi! Un&apos;estasi di gesti frenetici per
						infilare le goffe maschere appena in tempo, ma qualcuno ancora urlava
						e inciampava, dibattendosi come un uomo nel fuoco o nella calce viva.
						Confusamente, attraverso i vetri appannati e la densa luce verde,
						come sotto un mare verde, lo vidi annegare.
					</p>
					<p>
						<span className="font-semibold text-foreground">
							3ª strofa —{" "}
						</span>
						In tutti i miei sogni, davanti ai miei occhi impotenti, si getta
						verso di me, tremolando come una candela che si spegne, soffocando,
						annegando.
					</p>
					<p>
						<span className="font-semibold text-foreground">
							4ª strofa —{" "}
						</span>
						Se in qualche sogno soffocante anche tu potessi camminare dietro il
						carro su cui lo gettammo, e guardare gli occhi bianchi contorcersi
						nel suo volto, il suo volto penzolante, come quello di un diavolo
						disgustato dal peccato; se potessi sentire, a ogni sobbalzo, il
						sangue gorgogliare dai polmoni corrotti dalla schiuma, osceno come
						il cancro, amaro come il rigurgito di piaghe infette e incurabili su
						lingue innocenti — amico mio, non racconteresti con tanto entusiasmo
						ai ragazzi ardenti di una qualche disperata gloria, la vecchia
						Menzogna: è dolce e onorevole morire per la patria.
					</p>
				</div>
			</Section>

			{/* 5. Comprensione del testo */}
			<Section title="Comprensione del testo">
				<div className="space-y-6">
					<AnnotatedBlock title="1ª strofa — La marcia degli sfiniti">
						<p>
							La poesia si apre con un&apos;immagine potente di degradazione
							fisica e morale. I soldati non sono eroi gloriosi: sono paragonati
							a «vecchi mendicanti» e «vecchie megere». Owen demolisce fin dal
							primo verso ogni idealizzazione romantica della guerra. Il ritmo è
							pesante e trascinato, rispecchia il passo sfinito della marcia. Le
							parole «knock-kneed» e «blood-shod» (con i piedi avvolti nel
							sangue al posto delle scarpe) costruiscono un quadro di sofferenza
							estrema. L&apos;accumulo di aggettivi — «lame», «blind», «deaf»,
							«drunk with fatigue» — trasforma i soldati in figure quasi
							inumane. L&apos;ultimo verso introduce con inquietante leggerezza
							i proiettili al gas che cadono «softly» alle loro spalle,
							preparando il dramma della strofa successiva.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="2ª strofa — L'attacco con il gas">
						<p>
							Il tono cambia brutalmente. L&apos;allarme «Gas! GAS!» irrompe
							con urgenza — il passaggio dalle minuscole alle maiuscole mima il
							crescere del panico. L&apos;espressione «ecstasy of fumbling» è
							un ossimoro geniale: l&apos;«estasi» è quella del terrore, non
							del piacere. Un soldato non riesce a indossare la maschera in
							tempo. Owen lo descrive come un uomo che annega, che «si dibatte
							come un uomo nel fuoco o nella calce viva». Attraverso i vetri
							appannati della propria maschera anti-gas, Owen vede il compagno
							morire in un «mare verde» — il cloro che riempie l&apos;aria.
							L&apos;immagine dell&apos;annegamento nel gas è tra le più
							memorabili della poesia di guerra.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="3ª strofa — Il trauma del sopravvissuto">
						<p>
							Questi due versi isolati costituiscono una pausa traumatica. Owen
							si sposta nel tempo: non è più nella trincea, ma nei suoi incubi.
							L&apos;immagine del soldato morente lo perseguita — «before my
							helpless sight» (davanti ai miei occhi impotenti). I tre participi
							in climax — «guttering, choking, drowning» — racchiudono tutta
							l&apos;agonia della morte per gas. Il verbo «guttering», mutuato
							dalla candela che si consuma, è particolarmente efficace: riduce
							la vita umana a una fiammella tremolante. Questa strofa-cerniera
							anticipa di decenni la comprensione clinica del disturbo
							post-traumatico da stress.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="4ª strofa — L'accusa e la Menzogna">
						<p>
							L&apos;ultima e più lunga strofa è una sfida diretta al lettore.
							Owen usa il «you» con violenza retorica: costringe il destinatario
							a guardare gli occhi bianchi che si contorcono, il viso stravolto
							«come quello di un diavolo disgustato dal peccato», il sangue che
							gorgoglia dai polmoni corrotti. Le similitudini finali — «obscene
							as cancer», «bitter as the cud of vile, incurable sores on
							innocent tongues» — raggiungono un apice di brutalità poetica. Poi
							arriva il colpo finale: l&apos;apostrofe «My friend» è sarcastica,
							quasi un&apos;accusa. E la «vecchia Menzogna» viene svelata: «
							<em>Dulce et decorum est / Pro patria mori</em>» — la frase di
							Orazio che per secoli aveva giustificato il sacrificio bellico.
							Owen la chiama per quello che è: una bugia.
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
							Il ritmo muta drasticamente tra le strofe. La prima è lenta,
							pesante, trascinata — rispecchia il passo sfinito della marcia nel
							fango. La seconda esplode in un ritmo frenetico e spezzato con
							l&apos;allarme del gas. Il distico della terza strofa rallenta di
							colpo, sospeso nel tempo dell&apos;incubo. La quarta ricomincia
							lenta e si fa via via più incalzante, accumulando immagini sempre
							più brutali fino alla sentenza finale.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Punteggiatura">
						<p>
							Owen usa la punteggiatura come strumento ritmico: i punti e virgola
							della prima strofa («All went lame; all blind;») spezzano il verso
							in singhiozzi di stanchezza. Il trattino lungo in «Gas! GAS! Quick,
							boys!—An ecstasy of fumbling» marca lo strappo brutale dalla
							marcia all&apos;emergenza. I due punti prima del motto latino
							(«The old Lie: Dulce et decorum est») introducono la sentenza
							finale con solennità ironica.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Enjambement">
						<ul className="list-disc list-inside space-y-1">
							<li>
								1ª strofa, vv. 7-8:{" "}
								<em>«the hoots / Of gas-shells»</em> — il suono
								dei proiettili trabocca oltre il verso
							</li>
							<li>
								2ª strofa, vv. 1-2:{" "}
								<em>«ecstasy of fumbling / Fitting the clumsy helmets»</em> — il
								gesto frenetico si prolunga oltre la pausa
							</li>
							<li>
								4ª strofa, vv. 5-6:{" "}
								<em>«the blood / Come gargling»</em> — lo spezzamento mima il
								gorgoglio del sangue
							</li>
							<li>
								4ª strofa, vv. 7-8:{" "}
								<em>«the cud / Of vile, incurable sores»</em> — la nausea si
								espande al verso successivo
							</li>
							<li>
								4ª strofa, vv. 11-12:{" "}
								<em>«Dulce et decorum est / Pro patria mori»</em> — il motto
								stesso viene spezzato, come la sua credibilità
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
					<AnnotatedBlock title="Onomatopea">
						<p>
							«<em>sludge</em>», «<em>trudge</em>», «<em>gargling</em>» — i
							suoni stessi delle parole riproducono il rumore del fango sotto
							gli stivali e del sangue che gorgoglia nei polmoni. Owen costringe
							il lettore ad «ascoltare» la sofferenza.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Allitterazione">
						<p>
							«<em>watch the white eyes writhing</em>» — la ripetizione del
							suono /w/ lega lo sguardo impotente dell&apos;osservatore alla
							contorsione degli occhi del morente, creando un effetto di
							ipnotica repulsione.
						</p>
					</AnnotatedBlock>
				</div>

				{/* Figure di significato */}
				<h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">
					Figure di significato
				</h3>
				<div className="space-y-6 mb-8">
					<AnnotatedBlock title="Similitudine">
						<p>
							Sono le figure più ricorrenti nella poesia. «<em>like old beggars
							under sacks</em>» (come vecchi mendicanti), «<em>coughing like
							hags</em>» (tossendo come megere), «<em>like a man in fire or
							lime</em>» (come un uomo nel fuoco), «<em>like a devil&apos;s sick
							of sin</em>» (come un diavolo disgustato dal peccato), «
							<em>obscene as cancer</em>» (osceno come il cancro). Ogni
							similitudine degrada il soggetto, demolendo l&apos;eroismo.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Ossimoro">
						<p>
							«<em>An ecstasy of fumbling</em>» — l&apos;«estasi» accostata al
							gesto goffo e disperato di infilare le maschere anti-gas. Owen
							capovolge il significato di una parola positiva per descrivere il
							terrore. Anche «<em>dropping softly</em>», riferito ai proiettili
							al gas, è un accostamento ossimorico: la morte arriva con
							delicatezza.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Metafora">
						<p>
							«<em>blood-shod</em>» — i piedi sono «calzati di sangue» al posto
							degli stivali. «<em>under a green sea</em>» — il gas al cloro
							diventa un mare verde in cui il soldato annega. «<em>Drunk with
							fatigue</em>» — la stanchezza intossica come l&apos;alcol.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Ironia tragica">
						<p>
							L&apos;intera poesia è costruita su un&apos;ironia strutturale: il
							titolo latino, che celebra la gloria del sacrificio, viene
							rovesciato dalle immagini di orrore che lo precedono.
							L&apos;apostrofe «<em>My friend</em>» è sarcastica — Owen non si
							rivolge a un amico, ma a un accusato.
						</p>
					</AnnotatedBlock>
				</div>

				{/* Figure di ordine */}
				<h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-foreground mt-8 mb-4">
					Figure di ordine
				</h3>
				<div className="space-y-6">
					<AnnotatedBlock title="Climax">
						<p>
							Ricorre a più livelli: «<em>Gas! GAS!</em>» (dalle minuscole alle
							maiuscole), «<em>guttering, choking, drowning</em>» (tre stadi
							dell&apos;agonia in crescendo), e l&apos;intera architettura della
							poesia che sale verso l&apos;accusa finale. Ogni strofa amplifica
							l&apos;orrore della precedente.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Anastrofe">
						<p>
							«<em>towards our distant rest began to trudge</em>» — l&apos;inversione
							dell&apos;ordine naturale (soggetto-verbo-complemento) rallenta
							il ritmo e mima la fatica della marcia. I soldati non «cominciano
							a trascinarsi»: il verbo arriva in fondo, come la meta.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Apostrofe">
						<p>
							Nella quarta strofa Owen si rivolge direttamente al lettore con
							«<em>you too could pace</em>», «<em>If you could hear</em>» e
							infine «<em>My friend</em>». Questo improvviso cambiamento di
							destinatario trasforma la narrazione in un atto d&apos;accusa.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			<Divider />

			{/* 8. Campo semantico prevalente */}
			<Section title="Campo semantico prevalente">
				<div className="space-y-6">
					<AnnotatedBlock title="Sofferenza fisica e degradazione">
						<p>
							<em>sludge</em>, <em>blood-shod</em>, <em>lame</em>,{" "}
							<em>blind</em>, <em>deaf</em>, <em>choking</em>,{" "}
							<em>drowning</em>, <em>gargling</em>, <em>froth-corrupted
							lungs</em>, <em>vile sores</em>, <em>cancer</em> — un lessico di
							malattia, mutilazione e disgregazione corporea che pervade
							l&apos;intera poesia. Il corpo umano non è mai glorioso: è sempre
							sofferente, deformato, in decomposizione.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Morte e soffocamento">
						<p>
							<em>gas-shells</em>, <em>fumbling</em>, <em>fire</em>,{" "}
							<em>lime</em>, <em>green sea</em>, <em>drowning</em>,{" "}
							<em>guttering</em>, <em>smothering</em> — la morte per gas è
							resa attraverso immagini di immersione, soffocamento, calce viva.
							Il soldato non cade eroicamente: annega lentamente in un mare di
							veleno.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Retorica e menzogna">
						<p>
							<em>zest</em>, <em>glory</em>, <em>ardent</em>, <em>dulce</em>,{" "}
							<em>decorum</em>, <em>the old Lie</em> — le parole della
							propaganda bellicista vengono isolate nell&apos;ultima strofa e
							contrapposte alle immagini di orrore che le precedono. Il
							contrasto tra il lessico «alto» del latino e quello «basso» della
							sofferenza è il motore retorico della poesia.
						</p>
					</AnnotatedBlock>
					<p className="text-foreground/85 leading-relaxed mt-4">
						Lo scontro tra questi campi semantici — corpo sofferente contro
						retorica gloriosa — è la strategia centrale della poesia: Owen fa
						parlare le ferite per smascherare le bugie.
					</p>
				</div>
			</Section>

			{/* 9. Temi centrali */}
			<Section title="Temi centrali">
				<div className="space-y-6">
					<AnnotatedBlock title="La menzogna della guerra gloriosa">
						<p>
							Il tema portante, racchiuso nel titolo stesso: il motto oraziano
							«<em>Dulce et decorum est pro patria mori</em>» è «la vecchia
							Menzogna». Owen smonta la retorica patriottica mostrando cosa
							significa davvero morire in guerra — non onore, ma fango, gas e
							agonia.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="La disumanizzazione del soldato">
						<p>
							I soldati sono ridotti a figure grottesche: mendicanti, megere,
							ubriachi, zoppi, ciechi. La guerra li priva di ogni dignità umana
							prima ancora di ucciderli. Owen insiste sulla distanza tra
							l&apos;immagine eroica del soldato e la sua realtà di corpo
							devastato.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Il trauma e la memoria">
						<p>
							La terza strofa — «In all my dreams» — introduce il tema del
							trauma del sopravvissuto. L&apos;orrore non finisce con la
							battaglia: perseguita Owen nei sogni, trasformando il ricordo in
							un incubo ricorrente. La poesia stessa è un atto di testimonianza.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="La responsabilità morale dei propagandisti">
						<p>
							La quarta strofa è un&apos;accusa diretta a chi propaga la
							retorica bellicista «<em>to children ardent for some desperate
							glory</em>» — a ragazzi ancora innocenti. Owen individua un
							colpevole preciso: non il nemico, ma chi mente ai giovani per
							mandarli a morire.
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
							Il tono compie più trasformazioni: apre narrativo e cupo (la
							marcia), esplode nel panico (l&apos;attacco), si congela
							nell&apos;orrore (l&apos;incubo), culmina nell&apos;accusa
							frontale. Il registro oscilla tra il colloquiale
							(«<em>boys</em>», «<em>Quick</em>») e il viscerale
							(«<em>gargling</em>», «<em>froth-corrupted</em>»), fino al
							latino solenne del finale — usato per distruggerlo.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Lessico sensoriale">
						<p>
							Owen coinvolge sistematicamente tutti i sensi: la vista
							(«<em>white eyes writhing</em>», «<em>thick green light</em>»),
							l&apos;udito («<em>hoots</em>», «<em>gargling</em>»,
							«<em>yelling</em>»), il tatto («<em>sludge</em>»,
							«<em>blood-shod</em>»), il gusto («<em>bitter as the cud</em>»).
							Il lettore non osserva la scena: la subisce.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="L'uso del «tu»">
						<p>
							L&apos;improvviso passaggio alla seconda persona nella quarta
							strofa («<em>you too could pace</em>», «<em>If you could
							hear</em>») è uno strumento retorico potentissimo: Owen rompe il
							muro tra narrazione e lettore, trasformando l&apos;accusa in un
							confronto diretto e personale.
						</p>
					</AnnotatedBlock>
					<AnnotatedBlock title="Il latino come arma">
						<p>
							Il motto oraziano non è una citazione ornamentale: è il bersaglio
							della poesia. Owen lo colloca negli ultimi due versi, dopo
							ventotto versi di orrore, perché il contrasto sia massimo. Il
							latino — lingua della tradizione e dell&apos;autorità — viene
							chiamato «<em>the old Lie</em>» e distrutto ideologicamente.
						</p>
					</AnnotatedBlock>
				</div>
			</Section>

			{/* 11. Messaggio e interpretazione */}
			<Section title="Messaggio e interpretazione">
				<div className="space-y-4 text-foreground/85 leading-relaxed">
					<p>
						<em>Dulce et Decorum Est</em> è un atto di denuncia feroce contro
						la propaganda bellicista. Owen non si limita a descrivere l&apos;orrore
						della guerra: lo usa come arma per smascherare una menzogna
						secolare — che morire in battaglia sia dolce e onorevole.
					</p>
					<p>
						La strategia è deliberata: Owen accumula ventotto versi di
						sofferenza fisica — fango, gas, sangue, polmoni corrotti, occhi che
						si contorcono — per poi contrapporre a tutto questo il motto latino
						di Orazio. Il contrasto è insopportabile, e proprio in questo risiede
						la forza della poesia: non serve argomentare contro la retorica
						bellicista quando si possono mostrare le ferite.
					</p>
					<p>
						A differenza della dolcezza meditativa di <em>Futility</em>, qui
						Owen sceglie la rabbia, la brutalità, il disgusto. L&apos;apostrofe
						finale — «<em>My friend, you would not tell…</em>» — è insieme
						un&apos;accusa e una preghiera: smettete di mentire ai ragazzi. La
						poesia rimane, a più di un secolo di distanza, una delle più potenti
						condanne mai scritte contro la glorificazione della guerra.
					</p>
				</div>
			</Section>

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
