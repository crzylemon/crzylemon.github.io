

class js {
	constructor() {}

	getInfo() {
		return {
			"id": "javascript",
			"name": "Javascript",
			"blocks": [{
				"opcode": "crzyjscommand",
				"blockType": "command",
				"text": "Javascript [input]",
				"arguments": {
					"input": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "crzyjsreport",
				"blockType": "reporter",
				"text": "Javascript [input1]",
				"arguments": {
					"input1": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "crzyjsbool",
				"blockType": "BlockType.BOOLEAN",
				"text": "Return [input2]",
				"arguments": {
				    "input2": {
				        "type": "string",
				        "defaultValue": "placeholder"
				    }
				},
			}, {
				"opcode": "jsnull",
				"blockType": "reporter",
				"text": "Null",
				"arguments": {},
			}
				  ]
		};
	}

	crzyjscommand({input}) {
        	eval(input);
	}

	crzyjsreport({input1}) {
		eval(input1);
	}
	
	crzyjsbool({input2}) {
		eval(input2);
	}
	
	jsnull({}) {
		return null;
	}
	
	
	
}

Scratch.extensions.register(new js());
