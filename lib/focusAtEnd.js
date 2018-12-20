
/**
 * Focus at the end of the document
 * @param  {Slate.Editor} editor
 */
function focusAtEnd(editor) {
    const { document } = editor.value;
    return editor.moveToEndOfNode(document);
}

module.exports = focusAtEnd;
