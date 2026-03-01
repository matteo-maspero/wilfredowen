interface StanzaProps {
	text: string;
	number?: number;
}

export default function Stanza({
	text,
	number
}: StanzaProps) {
	let lines = text.split("\n").map(line => line.trim());

	return (
		<section className="mb-16">
			{/* Number (if specified) */}
			{number !== undefined && (
				<h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground mb-6">
				{number}^ Strofa
				</h3>
			)}

			{/* Text */}
			<blockquote className="poem-text border-l-2 border-accent/40 pl-6 py-2 mb-8 text-foreground/80">
			{lines.map((line, i) => (
				<span key={i}>
				{line}{i < lines.length - 1 && <br />}
				</span>
			))}
			</blockquote>
		</section>
	);
}
