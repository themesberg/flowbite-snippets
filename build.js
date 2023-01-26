const buttonOptionsColors = [
	// Normal Buttons https://flowbite.com/docs/components/buttons
	{
		label: 'green',
		color: 'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
	},
	{
		label: 'red',
		color: 'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
	},
	{
		label: 'yellow',
		color: 'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800',
	},
	{
		label: 'purple',
		color: 'text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
	},
	// Gradian Monochrome Buttons https://flowbite.com/docs/components/buttons/#gradient-monochrome
	{
		label: 'blue-monogrome',
		color: 'text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
	},
	{
		label: 'green-monogrome',
		color: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800',
	},
	{
		label: 'cyan-monogrome',
		color: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
	},
	{
		label: 'teal-monogrome',
		color: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800',
	},
	{
		label: 'lime-monogrome',
		color: 'text-black bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800',
	},
	{
		label: 'red-monogrome',
		color: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800',
	},
	{
		label: 'pink-monogrome',
		color: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800',
	},
	{
		label: 'purple-monogrome',
		color: 'text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800',
	},
	// Gradient duotone Buttons https://flowbite.com/docs/components/buttons/#gradient-outline
	{
		label: 'purple-to-blue',
		color: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
	},
	{
		label: 'cyan-to-blue',
		color: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
	},
	{
		label: 'green-to-blue',
		color: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
	},
	{
		label: 'purple-to-pink',
		color: 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
	},
	{
		label: 'pink-to-orange',
		color: 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
	},
	{
		label: 'teal-to-lime',
		color: 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700'
	},
	{
		label: 'red-to-yellow',
		color: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
	},
	// Shadow buttons https://flowbite.com/docs/components/buttons/#colored-shadows
	{
		label: 'shadow-blue',
		color: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'
	},
	{
		label: 'shadow-green',
		color: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80'
	},
	{
		label: 'shadow-cyan',
		color: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80'
	},
	{
		label: 'shadow-teal',
		color: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80'
	},
	{
		label: 'shadow-lime',
		color: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80'
	},
	{
		label: 'shadow-red',
		color: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80'
	},
	{
		label: 'shadow-pink',
		color: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80'
	},
	{
		label: 'shadow-purple',
		color: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80'
	},
	// Normal Outlined buttons https://flowbite.com/docs/components/buttons/#outline-buttons
	{
		label: 'outline-blue',
		color: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
	},
	{
		label: 'outline-dark',
		color: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300'
	},
	{
		label: 'outline-green',
		color: 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'
	},
	{
		label: 'outline-red',
		color: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300'
	},
	{
		label: 'outline-yellow',
		color: 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300'
	},
	{
		label: 'outline-purple',
		color: 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300'
	}
];

const buttonOptionsSizes = [
	{
		label: 'extra-small',
		size: 'px-3 py-2 text-xs',
	},
	{
		label: 'small',
		size: 'px-3 py-2 text-sm',
	},
	{
		label: false,
		size: '',
	},
	{
		label: 'large',
		size: 'px-5 py-3 text-base',
	},
	{
		label: 'extra-large',
		size: 'px-6 py-3.5 text-base',
	}
];

const buttonDefault = {
	label: 'default',
	color: 'text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
};
var items = {};

const alwaysClass = 'font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'

buttonOptionsColors.forEach((buttonOption, index) => {
	buttonOptionsSizes.forEach((buttonOptionSize) => {
		if(!buttonOptionSize.label){
			buttonOptionSize.label = "default";
		}
		items[buttonOption.label + "-" + buttonOptionSize.label + "-with-pill"] = { 
			scope: "html",
			prefix: "flowbite-button-" + buttonOption.label + "-" + buttonOptionSize.label  + "-with-pill",
			body: `<button class="${buttonOption.color} ${buttonOptionSize.size} ${alwaysClass} rounded-full">Button</button>`,
			description: "Flowbite button " + buttonOption.label + " " + buttonOptionSize.label + " with pill"
		};

		items[buttonOption.label + "-" + buttonOptionSize.label] = {
			scope: "html",
			prefix: "flowbite-button-" + buttonOption.label + "-" + buttonOptionSize.label,
			body: `<button class="${buttonOption.color} ${buttonOptionSize.size} ${alwaysClass}">Button</button>`,
			description: "Flowbite button " + buttonOption.label + " " + buttonOptionSize.label
		};

		if (index === 0) {
			// Default button
			items[buttonOptionSize.label + "-with-pill"] = {
				scope: "html",
				prefix: "flowbite-button-" + buttonOptionSize.label + "-with-pill",
				body: `<button class="${buttonDefault.color} ${buttonOptionSize.size} ${alwaysClass} rounded-full">Button</button>`,
				description: "Flowbite button " + buttonOptionSize.label + " with pill"
			};

			items[buttonOptionSize.label] = {
				scope: "html",
				prefix: "flowbite-button-" + buttonOptionSize.label,
				body: `<button class="${buttonDefault.color} ${buttonOptionSize.size} ${alwaysClass}">Button</button>`,
				description: "Flowbite button " + buttonOptionSize.label
			};
		}
	});
});

const fs = require('fs');
// Write the file
fs.writeFile('snippets/buttons.json', JSON.stringify(items, null, 2), function (err) {
	if (err) return console.log(err);
	console.log('Created ' + Object.keys(items).length + ' snippets for buttons');
});

var indicators = {
	"indicator-count": {
		"scope": "html",
		"prefix": "flowbite-indicator-count",
		"body": "<span class=\"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full\">1</span>",
		"description": "Flowbite indicator count"
	},
	"indicator-loader": {
		"scope": "html",
		"prefix": "flowbite-indicator-loader",
		"body": `<div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"><div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div></div>`,
		"description": "Flowbite indicator loader"
	},

	"indicator-loader-spinner": {
		"scope": "html",
		"prefix": "flowbite-indicator-spinner",
		"body": `<div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"><div role="status"><svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg><span class="sr-only">Loading...</span></div></div>`,
		"description": "Flowbite indicator spinner"
	},
	"indicator-stepper":{
		"scope": "html",
		"prefix": "flowbite-indicator-stepper",
		"body": `<ol class="flex items-center"><li class="relative w-full mb-6"><div class="flex items-center"><div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"><svg aria-hidden="true" class="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div></div><div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3></div></li><li class="relative w-full mb-6"><div class="flex items-center"><div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"><svg aria-hidden="true" class="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div></div><div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li><li class="relative w-full mb-6"><div class="flex items-center"><div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"><svg aria-hidden="true" class="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div><div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div></div><div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li><li class="relative w-full mb-6"><div class="flex items-center"><div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0"><svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div></div><div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3></div></li></ol>`,
		"description": "Flowbite indicator stepper"
	},
	"indicator-status":{
		"scope": "html",
		"prefix": "flowbite-indicator-status",
		"body":`<div class="relative"><img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image"><span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span></div>`,
		"description": "Flowbite indicator status"
	}
};

// Indicators
const indicatorOptionsColors = [
	{
		label: 'white',
		color: 'bg-gray-200'
	},
	{
		label: 'gray',
		color: 'bg-gray-900 dark:bg-gray-700'
	},
	{
		label: 'blue',
		color: 'bg-blue-600'
	},
	{
		label: 'green',
		color: 'bg-green-500'
	},
	{
		label: 'red',
		color: 'bg-red-500'
	},
	{
		label: 'purple',
		color: 'bg-purple-500'
	},
	{
		label: 'indigo',
		color: 'bg-indigo-500'
	},
	{
		label: 'yellow',
		color: 'bg-yellow-300'
	},
	{
		label: 'teal',
		color: 'bg-teal-500'
	}
];

indicatorOptionsColors.forEach((indicatorOption) => {
	indicators[indicatorOption.label] = {
		scope: "html",
		prefix: "flowbite-indicator-" + indicatorOption.label,
		body: `<span class="flex w-3 h-3 rounded-full ${indicatorOption.color}"></span>`,
		description: "Flowbite indicator " + indicatorOption.label
	};

	indicators[indicatorOption.label + "-with-legend"] = {
		scope: "html",
		prefix: "flowbite-indicator-" + indicatorOption.label + "-with-legend",
		body: `<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 ${indicatorOption.color} rounded-full mr-1.5 flex-shrink-0"></span>Legend</span>`,
		description: "Flowbite indicator " + indicatorOption.label + " with legend"
	};
})

indicators['indicator-count'] = {
	scope: "html",
	prefix: "flowbite-indicator-count",
	body: `<button type="button" class="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg><span class="sr-only">Notifications</span>Messages<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div></button>`,
	description: "Flowbite indicator count"
}

fs.writeFile('snippets/indicators.json', JSON.stringify(indicators, null, 2), function (err) {
	if (err) return console.log(err);
	console.log('Created ' + Object.keys(indicators).length + ' snippets for indicators');
})