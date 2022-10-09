class Emmettblocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "emmettblocks",
            "name": "Emmettblocks",
                        "blocks": [
                        {
                            "opcode": "whengiven",
                            "blockType": "hat",
                            "text": "When [thing] given from Bluetooth",
                            "arguments": {
                                "thing": {
                                    "type": "string",
                                    "defaultValue": "message1"
                                },
                            }
                        },
                        {
                            "opcode": "give",
                            "blockType": "command",
                            "text": "Give string to Bluetooth [brod]",
                            "arguments": {
                                "brod": {
                                    "type": "string",
                                    "defaultValue": "message1"
                                },
                            }
                        },
                ]
        }
    }
    
        whengiven({thing}) {
        
    }
    
    give({brod}) {
        return "Gave " + name + " To Bluetooth!"
    }
}

Scratch.extensions.register(new Emmettblocks())
