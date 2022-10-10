

class CloudMultiplayer {
	constructor() {}

	getInfo() {
		return {
			"id": "cloudplayer",
			"name": "Cloud Multiplayer",
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
				"text": "Connect to cloud)",
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
		
	whenanyrecivedwith({validator}) {
		if (validator == true) {
			return "True!";
		}
		else {
			return "False.";
		}
	}
	
}

Scratch.extensions.register(new CloudMultiplayer());
