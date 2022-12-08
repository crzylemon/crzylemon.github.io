class javascript {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "js", //Extension Id
            "name": "Javascript", //Extension name
                        "blocks": [
                        {
                            "opcode": "js",
                            "blockType": "command", //Block type - Command: Connections up and down, Hat: Event - Cap: Connections only up - Boolean: True or false - Reporter: A Value...
                            "text": "Run code [input]",
                            "arguments": {
                                "input": {
                                    "type": "string", //Put the type of menu - like: dropdown, string and number
                                    "defaultValue": "message1" //Default Value
                                }, {
                            "opcode": "jsreport",
                            "blockType": "reporter", //Block type - Command: Connections up and down, Hat: Event - Cap: Connections only up - Boolean: True or false - Reporter: A Value...
                            "text": "Run code [input1]",
                            "arguments": {
                                "input1": {
                                    "type": "string", //Put the type of menu - like: dropdown, string and number
                                    "defaultValue": "message1" //Default Value
                                },
                            }
                        },
                ]
        };
    }
    
        js({input}) { //Block ID and menus
        var F=new Function (input);

        return(F());

    },
    
            jsreport({input1}) { //Block ID and menus
        var F1=new Function (input1);

        return(F1());

    }
    
}

Scratch.extensions.register(new javascript());


//extra tip for you guys, you can create new extensions like this
