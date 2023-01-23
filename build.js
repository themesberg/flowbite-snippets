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