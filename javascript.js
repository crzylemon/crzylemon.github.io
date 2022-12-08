

class js {
	constructor() {}

	getInfo() {
		return {
			"id": "javascript",
			"name": "Javascript",
			"blocks": [{
				"opcode": "js",
				"blockType": "command",
				"text": "Alert [input]",
				"arguments": {
					"input": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsreport",
				"blockType": "reporter",
				"text": "Alert [input1]",
				"arguments": {
					"input1": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsbutton",
				"blockType": "BlockType.BUTTON",
				"text": "Alert [input2]",
				"arguments": {
				    "input2": {
				        "type": "string",
				        "defaultValue": "placeholder"
				    }
				},
			}
				  ]
		};
	}

	js({input}) {
        	alert(input)
	}

	jsreport({input1}) {
		alert(input1)
	}
	
	jsbutton({input2}) {
		alert(input2)
	}
	
}

Scratch.extensions.register(new js());
