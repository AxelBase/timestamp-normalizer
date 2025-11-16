<script lang="ts">
	import { base } from '$app/paths';

	const posts = [
	{
		href: '/blog/posts/post1',
		title: 'What is the Timestamp Normalizer?',
		description: 'An introduction to the free web tool that converts any timestamp format into ISO 8601 — instantly and accurately.'
	},
	{
		href: '/blog/posts/post2',
		title: 'How Timestamp Parsing Works',
		description: 'Behind the scenes: how Luxon handles Unix, ISO, natural dates, and custom formats with zero ambiguity.'
	},
	{
		href: '/blog/posts/post3',
		title: 'Your First ISO 8601 Conversion',
		description: 'Step-by-step guide to pasting a timestamp, selecting a timezone, and getting clean ISO output in seconds.'
	},
	{
		href: '/blog/posts/post4',
		title: 'Understanding Timezone Offsets',
		description: 'Decode +02:00, -05:00, and Z — and why preserving the original offset matters for logs and APIs.'
	},
	{
		href: '/blog/posts/post5',
		title: 'Copy-Paste Ready ISO Output',
		description: 'How the “Copy” buttons deliver perfect ISO strings for databases, APIs, and documentation.'
	},
	{
		href: '/blog/posts/post6',
		title: 'Auto-Detect vs Manual Timezone',
		description: 'When to trust your local timezone and when to override it for consistency across teams.'
	},
	{
		href: '/blog/posts/post7',
		title: 'Handling Daylight Saving Time (DST)',
		description: 'How the normalizer correctly adjusts for DST transitions — even when your input doesn’t specify it.'
	}
	];

</script>

<svelte:head>
	<title>Blog | AxelBase Insights</title>
	<meta
		name="description"
		content="Explore insights, tutorials, and updates for the AxelBase Markdown Meta Tag Tester."
	/>
</svelte:head>

<div class="container fade-in blog-index">
	<header class="blog-header">
		<h1 class="title-glow">AxelBase Insights</h1>
		<p class="subtitle">
			Explore tutorials, updates, and best practices for the Timestamp Normalizer. Learn about new
			features, usage tips, and more from our <a
				href="https://github.com/axelbase"
				target="_blank"
				rel="noopener noreferrer">GitHub repository</a
			>.
		</p>
	</header>

	<div class="posts-grid">
		{#each posts as post}
			<a href="{base}{post.href}" class="post-card glass-card">
				<div class="card-body">
					<h2 class="post-title">{post.title}</h2>
					<p class="post-description">{post.description}</p>
					<span class="read-more">Read Article &rarr;</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	/* --- 🎨 Theme Variables --- */
	:root {
		--signal-violet: #924e7d;
		--white: #ffffff;
		--glass-bg: rgba(255, 255, 255, 0.45);
		--glass-border: rgba(255, 255, 255, 0.2);
		--glass-shadow: 0 8px 32px 0 rgba(146, 78, 125, 0.2);
		--text-color: #212529;
		--text-color-light: #495057;
	}

	/* --- ✨ Animations --- */
	.fade-in {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes textGlow {
		0% {
			text-shadow:
				0 0 5px rgba(146, 78, 125, 0.1),
				0 0 10px rgba(146, 78, 125, 0.1);
		}
		100% {
			text-shadow:
				0 0 10px rgba(146, 78, 125, 0.3),
				0 0 20px rgba(146, 78, 125, 0.3);
		}
	}

	/* --- 📝 Page Styles --- */
	.blog-index {
		padding-top: 3rem;
		padding-bottom: 5rem;
	}

	.blog-header {
		text-align: center;
		margin-bottom: 4rem;
		padding-bottom: 2rem;
	}

	.blog-header h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: var(--signal-violet);
		margin-bottom: 1rem;
	}

	.title-glow {
		animation: textGlow 2.5s alternate infinite ease-in-out;
	}

	.subtitle {
		font-size: 1.15rem;
		color: var(--text-color-light);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.subtitle a {
		color: var(--signal-violet);
		font-weight: 600;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s ease;
	}
	.subtitle a:hover {
		border-color: var(--signal-violet);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	/* --- 💎 Glass Card Styling --- */
	.glass-card {
		background: var(--glass-bg);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-radius: 0.75rem;
		border: 1px solid var(--glass-border);
		box-shadow: var(--glass-shadow);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.glass-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 36px 0 rgba(146, 78, 125, 0.25);
	}

	.post-card {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.post-card .card-body {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1.75rem;
	}

	.post-title {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--signal-violet);
		margin-bottom: 0.75rem;
	}

	.post-description {
		color: var(--text-color-light);
		flex-grow: 1;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.read-more {
		color: var(--signal-violet);
		font-weight: 700;
		align-self: flex-start;
		transition: transform 0.25s ease;
	}

	.post-card:hover .read-more {
		transform: translateX(6px);
	}
</style>