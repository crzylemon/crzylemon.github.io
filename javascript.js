

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
			}, {
				"opcode": "jsunequal",
				"blockType": "reporter",
				"text": "[num1] ≠ [num2]",
				"arguments": {
				    "num1": {
				        "type": "string",
				        "defaultValue": " "
				    }, "num2": {
				        "type": "string",
				        "defaultValue": "50"
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
	
	jsnull({}) {
		return null;
	}
	
	jsunequal({num1, num2}) {
	    if (num1 != num2) {
            		return true;
        	} else {
            		return false;
        	}
	}
	
}

Scratch.extensions.register(new js());
