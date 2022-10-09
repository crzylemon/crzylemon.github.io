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
                            "blockType": "reporter",
                            "text": "extract [name] from [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "temperature"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": '{"temperature": 12.3}'
                                },
                            }
                        },
                ]
        }
    }
    
        fetchpoo({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new Emmettblocks())
