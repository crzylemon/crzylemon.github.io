class Emmettblocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "emmettblocks",
            "name": "Emmettblocks",
                        "blocks": [
                        {
                            "opcode": "whenido",
                            "blockType": "hat",
                            "text": "when i go do a [thing1]",
                            "arguments": {
                                "thing": {
                                    "type": "string",
                                    "defaultValue": "poopoo"
                                },
                            }
                        },
                        {
                            "opcode": "doa",
                            "blockType": "stack",
                            "text": "do a [thing2]",
                            "arguments": {
                                "thing": {
                                    "type": "string",
                                    "defaultValue": "poopoo"
                                }
                            }
                        },
                ]
        }
    }
    
        whenido({thing1}) {
        return "did a" + " " + (thing)
    }
    
    doa({thing2}) {
        return "hello"
        }
    }
}

Scratch.extensions.register(new Emmettblocks())
