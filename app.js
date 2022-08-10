const { createApp } = Vue;

const app = createApp({
	template: `
		<h3>{{ quote }}</h3>
		<blockquote>- {{ author }}</blockquote>

		<button v-on:click="changeQuote">
			Change quote
		</button>
	`,
	data: () => ({
		quote: "I'm Batman",
		author: "Bruce Wayne",
	}),
	methods: {
		changeQuote() {
			this.capitalize();
			this.author = "Alex";
		},
		capitalize() {
			this.quote = this.quote.toUpperCase();
		},
	},
});

app.mount("#root");
