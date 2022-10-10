class Your_Extension { //Put your extension here!
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Extension_ID", //Extension Id
            "name": "Extension name", //Extension name
                        "blocks": [
                        {
                            "opcode": "Block_ID", //Block ID, Does not show up, only in project.js
                            "blockType": "hat", //Block type - Command: Connections up and down, Hat: Event - Cap: Connections only up - Boolean: True or false - Reporter: A Value...
                            "text": "Your text [Your_Menu]", //The stuff in square brackets ([]) Have to match one of your menus.
                            "arguments": { //Put menus in here (optinal)
                                "Your_Menu": { //Menu name
                                    "type": "string", //Put the type of menu - like: dropdown, string and number
                                    "defaultValue": "message1" //Default Value
                                },
                            }
                        },
                ]
        };
    }
    
        Block_ID({Your_Menu}) { //Block ID and menus
        return Your_Menu;
    }
    
}

Scratch.extensions.register(new Your_Extension()); //Again, Put your extension here
