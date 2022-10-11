class textcontrol { //Put your extension here!
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "textcontrol",
            "name": "Text control",
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
                                    where: {
                                        acceptReporters: true,
                                        items: ["Center", "p"]
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
