import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/poem/Header";
import Section from "@/components/poem/Section";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
	title: "Biografia",
	description:
		"La vita di Wilfred Owen: dall'infanzia a Oswestry alle trincee della Prima Guerra Mondiale. Una biografia essenziale per comprendere la sua poesia.",
};

const timeline = [
	{
		period: "1893 – 1914",
		title: "L'infanzia e la formazione",
		image: null,
		paragraphs: [
			<>
				<strong className="font-[family-name:var(--font-playfair)] text-foreground">
					Wilfred Edward Salter Owen
				</strong>{" "}
				nacque il 18 marzo 1893 a Oswestry, nello Shropshire, in una
				famiglia della classe media inglese. Fin da giovane mostrò una
				profonda passione per la poesia, influenzato dalla lettura di
				Keats e Shelley, e compose i primi versi già nell&apos;adolescenza.
			</>,
			<>
				Dopo aver tentato senza successo di ottenere una borsa di studio
				per l&apos;Università di Londra, nel 1913 si trasferì in Francia
				come insegnante di inglese a Bordeaux, dove rimase fino
				all&apos;inizio della guerra.
			</>,
		],
	},
	{
		period: "1915 – 1917",
		title: "L'arruolamento e le trincee",
		image: null,
		paragraphs: [
			<>
				Nel 1915, spinto dal senso del dovere ma anche dalla retorica
				patriottica dell&apos;epoca, Owen si arruolò nell&apos;esercito
				britannico come ufficiale degli Artists&apos; Rifles. Dopo
				l&apos;addestramento, nel gennaio 1917 fu inviato in Francia con
				il Manchester Regiment.
			</>,
			<>
				L&apos;esperienza al fronte fu devastante. Owen partecipò alla
				battaglia della Somme e fu esposto agli orrori quotidiani della
				guerra di trincea: bombardamenti incessanti, attacchi con il gas,
				fango, gelo e la morte costante dei compagni. Questa esperienza
				trasformò radicalmente la sua visione della guerra e della poesia.
			</>,
			<>
				Nel maggio 1917, dopo settimane di combattimenti particolarmente
				intensi, Owen fu diagnosticato con <em>shell shock</em> (quello
				che oggi chiameremmo disturbo post-traumatico da stress) e inviato
				al Craiglockhart War Hospital in Scozia per la riabilitazione.
			</>,
		],
	},
	{
		period: "Estate 1917",
		title: "L'incontro con Siegfried Sassoon",
		image: {
			src: "/images/chateau-wood.jpg",
			alt: "Chateau Wood, Ypres, 1917 — il paesaggio devastato del fronte occidentale",
			caption: "Chateau Wood, Ypres, 1917 — Dominio pubblico",
		},
		paragraphs: [
			<>
				A Craiglockhart avvenne l&apos;incontro che cambiò per sempre la
				poesia di Owen. Il poeta e ufficiale{" "}
				<strong>Siegfried Sassoon</strong>, già famoso per i suoi versi
				anti-bellicisti, era ricoverato nello stesso ospedale. Owen, che
				lo ammirava enormemente, si presentò a lui con i propri manoscritti.
			</>,
			<>
				Sassoon riconobbe immediatamente il talento straordinario del
				giovane poeta e divenne il suo mentore. Sotto la sua guida, Owen
				abbandonò lo stile romantico dei primi versi e sviluppò una voce
				poetica unica: realista, brutale, intrisa di compassione per i
				soldati e di rabbia contro chi mandava i giovani a morire.
			</>,
			<>
				Fu durante questo periodo e nei mesi successivi che Owen compose
				la maggior parte delle poesie per cui è ricordato, tra cui{" "}
				<em>Dulce et Decorum Est</em>, <em>Futility</em>,{" "}
				<em>Anthem for Doomed Youth</em> e <em>Strange Meeting</em>.
			</>,
		],
	},
	{
		period: "1918",
		title: "Il ritorno al fronte e la morte",
		image: null,
		paragraphs: [
			<>
				Nonostante le conseguenze dello <em>shell shock</em> e i
				consigli di Sassoon, Owen scelse di tornare al fronte
				nell&apos;estate del 1918. Sentiva il dovere morale di stare con
				i suoi uomini e di testimoniare la realtà della guerra. Scrisse
				in una lettera alla madre:{" "}
				<em>
					&ldquo;Sono un poeta di guerra. È questo che devo
					essere.&rdquo;
				</em>
			</>,
			<>
				Il <strong>4 novembre 1918</strong>, mentre guidava i suoi uomini
				nell&apos;attraversamento del canale Sambre-Oise, nei pressi della
				foresta di Mormal in Francia, Wilfred Owen fu colpito e ucciso da
				un colpo di mitragliatrice. Aveva venticinque anni.
			</>,
			<>
				La notizia della sua morte raggiunse la madre esattamente{" "}
				<strong>una settimana dopo</strong>, l&apos;11 novembre 1918,
				mentre le campane suonavano per celebrare l&apos;Armistizio e la
				fine della guerra.
			</>,
		],
	},
	{
		period: "L'eredità",
		title: "Il poeta della pietà",
		image: null,
		paragraphs: [
			<>
				Owen pubblicò in vita solo cinque poesie. Fu Sassoon a curare la
				prima raccolta postuma nel 1920, rivelando al mondo un genio
				poetico che la guerra aveva stroncato troppo presto.
			</>,
			<>
				La sua opera ha influenzato profondamente tutta la letteratura di
				guerra del Novecento. Owen ha dato voce a una generazione
				sacrificata, trasformando l&apos;orrore in poesia e la poesia in
				un atto di resistenza contro la menzogna della gloria bellica.
			</>,
			<>
				Nella prefazione che aveva abbozzato per la sua raccolta, Owen
				scrisse le parole che ne definiscono l&apos;intera opera:{" "}
				<em>
					&ldquo;La mia poesia non è nella pietà. La pietà è nella
					poesia. [...] Tutto ciò che un poeta può fare oggi è
					avvertire.&rdquo;
				</em>
			</>,
		],
	},
];

const poems = [
	{ href: "/dulce-et-decorum-est", title: "Dulce et Decorum Est", year: "1917" },
	{ href: "/futility", title: "Futility", year: "1918" },
];

function TimelineEntry({
	period,
	title,
	image,
	paragraphs,
}: (typeof timeline)[number]) {
	return (
		<div className="border-l-2 border-accent/30 pl-8">
			{image && (
				<div className="relative w-full h-40 md:h-52 mb-6 overflow-hidden">
					<Image
						src={image.src}
						alt={image.alt}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 700px"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
					<p className="absolute bottom-2 left-4 text-[10px] text-white/60 italic">
						{image.caption}
					</p>
				</div>
			)}
			<span className="text-accent font-semibold text-sm tracking-wider uppercase">
				{period}
			</span>
			<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mt-2 mb-4">
				{title}
			</h2>
			<div className="space-y-4 text-foreground/85 leading-relaxed">
				{paragraphs.map((content, i) => (
					<p key={i}>{content}</p>
				))}
			</div>
		</div>
	);
}

export default function AuthorPage() {
	return (
		<>
			<Header
				title="Wilfred Owen"
				subtitle="La vita breve e intensa del più grande poeta della Grande Guerra"
			/>

			<article className="max-w-4xl mx-auto px-6 pb-24">
				{/* Portrait + intro */}
				<section className="flex flex-col md:flex-row gap-10 items-start mb-20">
					<div className="w-full md:w-1/3 shrink-0">
						<div className="relative aspect-[3/4] overflow-hidden border border-accent/20">
							<Image
								src="/images/owen-portrait.png"
								alt="Ritratto di Wilfred Owen, circa 1916"
								fill
								className="object-cover object-top"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</div>
						<p className="text-xs text-muted-light mt-2 text-center italic">
							Wilfred Owen, ca. 1916 — Dominio pubblico
						</p>
					</div>
					<div className="space-y-5 text-foreground/85 leading-relaxed">
						{timeline[0].paragraphs.map((content, i) => (
							<p key={i} className={i === 0 ? "text-lg" : undefined}>
								{content}
							</p>
						))}
					</div>
				</section>

				{/* Full-width trench image */}
				<div className="relative w-full h-56 md:h-72 my-16 overflow-hidden border border-accent/10">
					<Image
						src="/images/hero-trench.jpg"
						alt="Trincea britannica durante la Battaglia della Somme, luglio 1916"
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 800px"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
					<div className="absolute bottom-4 left-6 right-6">
						<p className="text-xs text-foreground/60 italic">
							Trincea britannica sulla Somme, luglio 1916 — Imperial War
							Museums, dominio pubblico
						</p>
					</div>
				</div>

				{/* Timeline (skip first entry — already shown in portrait section) */}
				<section className="space-y-16">
					{timeline.slice(1).map((entry) => (
						<TimelineEntry key={entry.period} {...entry} />
					))}
				</section>

				<Divider />

				{/* Links to poems */}
				<Section title="Esplora le opere">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{poems.map((poem) => (
							<Link
								key={poem.href}
								href={poem.href}
								className="group block p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg text-center"
							>
								<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold group-hover:text-accent transition-colors">
									{poem.title}
								</h3>
								<p className="text-sm text-muted-light mt-2">{poem.year}</p>
							</Link>
						))}
					</div>
				</Section>
			</article>
		</>
	);
}
