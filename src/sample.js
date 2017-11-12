export default {
	blocks: [
		{
			index: 0,
			type: 'Div',
			style: {
				background: 'white',
				padding: 10,
				border: '1px solid #ccc'
			},
			children: []
		},
		{
			index: 1,
			type: 'Div',
			style: {
				background: 'white',
				padding: 10,
				border: '1px solid #ccc'
			},
			breakpoint: {
				xs: {
					width: '50%',
					minHeight: 0
				}
			},
			children: [
				{
					index: 3,
					type: 'Div',
					style: {
						background: 'gray',
					},
					breakpoint: {
						xl: {
							width: '50%',
							minHeight: 200
						}
					},
					children: []
				},
				{
					index: 4,
					type: 'Div',
					style: {
						background: 'gray',
					},
					breakpoint: {
						xl: {
							width: '50%',
							minHeight: 200
						}
					},
					children: []
				},

			]
		},
	],
	title: 'Sample page',
}
