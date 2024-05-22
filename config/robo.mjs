// @ts-check

/**
 * @type {import('robo.js').Config}
 **/
export default {
	experimental: {
		userInstall: true
	},logger: {
		level: 'debug' // This shows *all* the logs
	}
,
	clientOptions: {
		intents: [
			'Guilds',
			'GuildMessages',
			'MessageContent'
		]
	},
	plugins: [],
	type: 'robo'
}
