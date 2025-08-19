type PageProps = {
	params: { person: string };
};

export default function PersonPage({ params }: PageProps) {
	return (
		<main className="mx-auto max-w-3xl p-6">
			<h1 className="text-2xl font-bold">{params.person} のギャラリー</h1>
			<p className="mt-4 text-gray-600">このページはあとで実装します。</p>
		</main>
	);
} 