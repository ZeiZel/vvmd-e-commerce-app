/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
	reactStrictMode: true,
	images: {
		domains: ['http://localhost:3000/', 'http://localhost:3001/', 'http://localhost:3002/'],
	},
};

module.exports = nextConfig;
