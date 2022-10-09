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
                            "text": "when i go do a [thing]",
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
                            "text": "do a [thing]",
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
    
        whenido({thing}) {
        return "did a" + " " + (thing)
    }
    
    doa({thing}) {
        return "hello"
        }
    }
}

Scratch.extensions.register(new Emmettblocks())
