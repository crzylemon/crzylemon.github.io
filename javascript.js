

class js {
	constructor() {}

	getInfo() {
		return {
			"id": "javascript",
			"name": "Javascript",
			"blocks": [{
				"opcode": "js",
				"blockType": "command",
				"text": "Run javascript [input]",
				"arguments": {
					"input": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsreport",
				"blockType": "reporter",
				"text": "Run javascript [input1]",
				"arguments": {
					"input1": {
						"type": "string",
						"defaultValue": "placeholder"
					},
				}
			}, {
				"opcode": "jsbutton",
				"blockType": "BlockType.BUTTON",
				"text": "Run javascript [input2]",
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
        	var func=new Function (input);
		
		return func();
	}

	jsreport({input1}) {
		var func1()=new Function (input1);
		
		return func1();
	}
	
	jsbutton({input2}) {
		var func2()=new Function (input2)
		
		return func2();
	}
	
}

Scratch.extensions.register(new js());
