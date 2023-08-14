class crzyutils { //Put your extension here!
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "crzy_utils", 
            "name": "Crzy Utils", 
                        "blocks": [
                        {
                            "opcode": "util_return",
                            "blockType": "reporter",
                            "text": "Return [text]",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "Hello, World!"
                                },
                            }
                        },
                ]
        };
    }
    
        util_return({text}) {
        return text;
    }
    
}

Scratch.extensions.register(new crzyutils());
