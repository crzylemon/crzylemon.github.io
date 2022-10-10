class Emmettblocks {
	constructor() {}

	getInfo() {
		return {
			"id": "emmettblocks",
			"name": "Emmettblocks",
			"blocks": [{
				"opcode": "whengiven",
				"blockType": "hat",
				"text": "When [thing] recived from cloud",
				"arguments": {
					"thing": {
						"type": "string",
						"defaultValue": "message1"
					},
				}
			}, {
				"opcode": "give",
				"blockType": "command",
				"text": "Give string [brod]",
				"arguments": {
					"brod": {
						"type": "string",
						"defaultValue": "message1"
					},
				}
			}, {
				"opcode": "resetall",
				"blockType": "command",
				"text": "Reset all",
				"arguments": {},
			}
				  ]
		};
	}

	whengiven({thing}) {

	}

	give({brod}) {
		return "Gave " + brod + " to cloud!";
	}
	resetall({}) {
		return "Reset cloud data!";
	}
	
}

Scratch.extensions.register(new Emmettblocks());
