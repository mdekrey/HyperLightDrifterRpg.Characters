module.exports = {
	siteMetadata: {
		title: `DeKrey.NET`,
		description: `Personal articles and profile of Matt DeKrey`,
		author: `@mdekrey`,
		url: `https://dekrey.net`,
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
	proxy: {
		prefix: "/api",
		url: "http://localhost:7071",
	},
};
