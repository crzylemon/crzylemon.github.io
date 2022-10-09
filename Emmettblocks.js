class Emmettblocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "emmettblocks",
            "name": "Emmettblocks",
                        "blocks": [
                        {
                            "opcode": "fetchpoo",
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
                            "text": "do a [name]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "poopoo"
                                },
                            }
                        },
                ]
        }
    }
    
        fetchpoo({thing}) {
        return "idk"
    }
    
    doa({name}) {
        return "did a" + name
    }
}

Scratch.extensions.register(new Emmettblocks())
