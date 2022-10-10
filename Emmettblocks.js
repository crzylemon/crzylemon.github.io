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
				"opcode": "connect",
				"blockType": "command",
				"text": "Connect to cloud",
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
const project = 458027255 // Project ID
const session = new Session(process.env.USERNAME, process.env.PASSWORD, function(user) {
  // Create cloud session
  const cloud = new Cloud(user, project, function(error, cloud) {
    // On error, throw error
    if(error) throw error;
    
    // Log that the cloud session has started
    return "Connected!"
   });
});
	}
	
}

Scratch.extensions.register(new Emmettblocks());
