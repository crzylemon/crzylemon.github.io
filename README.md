# emmettdewet14.github.io

Hi! I make scratch extensions for version 3.0

I am working on "<a href="Emmettblocks.js">Emmettblocks</a>" currently.

Here is my progress on <a href="Emmettblocks.js">Emmettblocks</a> Right now
```javascript
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
                            "blockType": "command",
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
        
    }
    
    doa({name}) {
        return "did a" + " " + name
    }
}

Scratch.extensions.register(new Emmettblocks())
```
