/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],

	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			openSans: ["Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				black: colors.black,
				white: colors.white,
				yellow: "#edfa60",
				blue: "#14213d",
				gray: "#e5e5e5",
			},

			keyframes: {
				side: {
					"0%": { transform: "translateX(-50%)" },

					/* "50%": { transform: "none" }, */
					"100%": { transform: "translateY(-100%)" },
				},
			},

			animation: {
				"bouncing-ball": "side 2s linear infinite",
			},
		},
		plugins: [require("flowbite/plugin")],
	},
};

/* bounce {
	0%, 100% {
		transform: translateY(-25%);
		animation-timing-function: cubic-bezier(0.8,0,1,1);
	}
	50% {
		transform: none;
		animation-timing-function: cubic-bezier(0,0,0.2,1);
	}
}
			},
		},
	}, */
