class aitemplate { //Put your extension here!
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "AI_template", //Extension Id
            "name": "AI", //Extension name
                        "blocks": [
                        {
                            "opcode": "prompt", //Block ID, Does not show up, only in project.js
                            "blockType": "command", //Block type - Command: Connections up and down, Hat: Event - Cap: Connections only up - Boolean: True or false - Reporter: A Value...
                            "text": "Prompt [prompt1]", //The stuff in square brackets ([]) Have to match one of your menus.
                            "arguments": { //Put menus in here (optinal)
                                "prompt1": { //Menu name
                                    "type": "string", //Put the type of menu - like: dropdown, string and number
                                    "defaultValue": "Hello" //Default Value
                                },
                            }
                        },
                ]
        };
    }
    
        prompt({prompt1}) { //Block ID and menus
        return prompt1;
    }
    
}

Scratch.extensions.register(new aitemplate()); //Again, Put your extension here
