class textcontrol { //Put your extension here!
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "textcontrol",
            "name": "Text control",
            "blockIconURI": 'data:image/png;base64,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',
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
				"opcode": "connect",
				"blockType": "command",
				"text": "Connect to cloud",
				"arguments": {},
			}, {
				"opcode": "whenanyrecivedwith",
				"blockType": "hat",
				"text": "When anything with [validator] true recived",
				"arguments": {
					"validator": {
						"type": "boolean",
						"defaultValue": ""
					},
				},
			}, {
				"opcode": "recived",
				"blockType": "reporter",
				"text": "Last recived from cloud",
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
	connect({}) {
		// Require module
const { Session, Cloud } = require('scratchcloud');
// Create user session
const project = null; // Project ID
const session = new Session(process.env.USERNAME, process.env.PASSWORD, function(user) {
  // Create cloud session
  const cloud = new Cloud(user, project, function(error, cloud) {
    // On error, throw error
    if(error) throw error;
    
    // Log that the cloud session has started
    return "Connected!";
   });
});
	}
		
	whenanyrecivedwith({validator, trueorfalse}) {
		if (validator == trueorfalse){
			return trueorfalse;
		}
	}
	
	recived({}) {
		return "Placeholder.";
	}
	
}

Scratch.extensions.register(new CloudMultiplayer());

                        "blocks": [
                        {
                            "opcode": "write",
                            "blockType": "command",
                            "text": "Write [towrite] [where]",
                            "arguments": {
                                "towrite": {
                                    "type": "string",
                                    "defaultValue": "Hello world"
                                },
                            }
                        },
                ]
        };
    }
    
        write({towrite, where}) {
        return towrite + where ;
    }
    
}

Scratch.extensions.register(new textcontrol()); //Again, Put your extension here
