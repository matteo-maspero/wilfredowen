import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/poem/Header";
import Stanza from "@/components/poem/Stanza";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
	title: "Futility",
	description:
		"Analisi completa della poesia 'Futility' di Wilfred Owen: testo originale, analisi strofa per strofa, temi e figure retoriche.",
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
		paraphrase: `Spostatelo al sole—
		il suo tocco gentile lo svegliò una volta,
		a casa, sussurrando di campi seminati a metà.
		Lo svegliava sempre, persino in Francia,
		fino a questa mattina e questa neve.
		Se qualcosa può svegliarlo ora,
		il buon vecchio sole lo saprà.`
	},
	{
		text: `Think how it wakes the seeds—
		Woke once the clays of a cold star.
		Think of it,—not too hard to stir?
		The limbs, so dear-achieved,
		Are sides too hard to turn?
		Was it for this the clay grew tall?
		—O what made fatuous sunbeams toil
		To break earth's sleep at all?`,
		paraphrase: `Pensate a come sveglia i semi—
		una volta risvegliò le argille di una stella fredda.
		Pensateci —non è troppo difficile da scuotere?
		Le membra, conquistate con tanta fatica,
		sono fianchi troppo difficili da girare?
		È per questo che l'argilla è cresciuta fino a diventare alta?
		—Oh, cosa ha spinto gli sciocchi raggi del sole a faticare
		per spezzare il sonno della terra?`
	}
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

			{/* Contesto */}
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

			{/* Testo originale */}
			<section className="mb-16">
				{stanzas.map((s, i) => (
					<Stanza text={s.text} number={i + 1} />
				))}
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

			<Divider />

			{/* Figure retoriche */}
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

			{/* Linguaggio */}
			<section className="mb-16">
				<h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-8">
					Linguaggio
				</h2>
				<div className="space-y-6">
					<div className="border-l-2 border-accent/30 pl-6">
						<h3 className="font-semibold text-foreground mb-2">
							Tonalità e registro
						</h3>
						<p className="text-foreground/80 leading-relaxed">
							Il tono della poesia compie una trasformazione radicale: si apre
							gentile e speranzoso, poi diventa triste, rassegnato, e infine
							rabbioso. Owen parte da un registro descrittivo ma minimale e
							frammentario, realistico nella prima strofa, per approdare a un
							piano cosmico ed esistenziale nella seconda.
						</p>
					</div>
					<div className="border-l-2 border-accent/30 pl-6">
						<h3 className="font-semibold text-foreground mb-2">
							Musicalità
						</h3>
						<p className="text-foreground/80 leading-relaxed">
							Rime imperfette, assonanze, vocali aperte: Owen costruisce una
							musicalità sottile e dissonante che riecheggia il rumore della
							guerra. Il suono stesso dei versi trasmette disagio e
							frammentazione.
						</p>
					</div>
					<div className="border-l-2 border-accent/30 pl-6">
						<h3 className="font-semibold text-foreground mb-2">
							Campi semantici
						</h3>
						<ul className="text-foreground/80 leading-relaxed list-disc list-inside space-y-1">
							<li><strong>Morte e freddo:</strong> <em>snow</em>, <em>cold</em>, <em>sleep</em>, <em>futility</em></li>
							<li><strong>Campagna e vita:</strong> <em>sun</em>, <em>fields half-sown</em>, <em>seeds</em>, <em>gently its touch</em></li>
						</ul>
						<p className="text-foreground/80 leading-relaxed mt-2">
							Il contrasto tra questi due campi semantici è il motore della poesia.
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
