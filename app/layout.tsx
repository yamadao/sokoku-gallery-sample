import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
	title: 'Sokoku Gallery Starter',
	description: 'Next.js 14 App Router + TypeScript + Tailwind starter',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className="min-h-screen bg-white text-gray-900 antialiased">
				{children}
			</body>
		</html>
	);
} 