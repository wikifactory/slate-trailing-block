const Slate = require('slate');
const focusAtEnd = require('./focusAtEnd');

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {Function} [opts.match] Match last block
 * @param {String} [opts.type='paragraph'] The type of the trailing block to insert
 * @return {Object}
 */

function TrailingBlock(opts) {
    opts       = opts || {};
    opts.type  = opts.type || 'paragraph';
    opts.match = opts.match || (node => node.type === opts.type);

    return {
        onChange: (editor, next) => {
            const { document } = editor.value;
            const lastNode = document.nodes.last();
            if (lastNode && opts.match(lastNode)) {
                return next();
            }

            const lastIndex = document.nodes.size;
            const block = Slate.Block.create({
                type: opts.type,
                nodes: [Slate.Text.create()]
            });
            editor.insertNodeByKey(document.key, lastIndex, block);
        },

        changes: {
            focusAtEnd
        }
    };
}

module.exports = TrailingBlock;
