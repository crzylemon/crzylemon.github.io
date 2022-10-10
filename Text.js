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
                            "text": "Write [towrite]",
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
    
        write({towrite}) {
        return towrite;
    }
    
}

Scratch.extensions.register(new textcontrol()); //Again, Put your extension here
