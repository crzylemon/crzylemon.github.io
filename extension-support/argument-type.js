/**
 * Block argument types
 * @enum {string}
 */
const ArgumentType = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',

    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',

    /**
     * Numeric value with color picker
     */
    COLOR: 'color',

    /**
     * Numeric value with text field
     */
    NUMBER: 'number',

    /**
     * String value with text field
     */
    STRING: 'string',

    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',

    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',

    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image',

    /**
     * creates an input with n x,y inputs
     */
    POLYGON: 'polygon',

    /**
     * Costume menu (taken from tw)
     */
    COSTUME: 'costume',

    /**
     * Sound menu (taken from tw)
     */
    SOUND: 'sound'
};

module.exports = ArgumentType;
