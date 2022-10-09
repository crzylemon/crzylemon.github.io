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
                            "opcode": "jsonExtract",
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
        return "did a" + thing
    }
    
    jsonExtract({name,data}) {
        return "did a" + thing
    }
}

Scratch.extensions.register(new Emmettblocks())
