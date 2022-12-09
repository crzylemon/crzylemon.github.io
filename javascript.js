

class js {
	constructor() {}

	getInfo() {
		return {
			"id": "javascript",
			"name": "Javascript",
			"blocks": [{
				"opcode": "js",
				"blockType": "command",
				"text": "Return [input]",
				"arguments": {
					"input": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsreport",
				"blockType": "reporter",
				"text": "Return [input1]",
				"arguments": {
					"input1": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsbutton",
				"blockType": "boolean",
				"text": "Return [input2]",
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
        	return input;
	}

	jsreport({input1}) {
		return input1;
	}
	
	jsbutton({input2}) {
		return input2;
	}
	
}

Scratch.extensions.register(new js());
