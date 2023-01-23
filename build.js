const buttonOptionsColors = [
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

	{
		label: 'green-monogrome',
		color: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800',
	},
	{
		label: 'red-monogrome',
		color: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800',
	},
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
		label: 'base',
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
		items[buttonOption.label + "-" + buttonOptionSize.label + "-with-pill"] = { 
			scope: "html",
			prefix: "flowbite-button-" + buttonOption.label + "-" + buttonOptionSize.label + "-with-pill",
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
	console.log('File created');
});