
/**
 * Focus at the end of the document
 * @param  {Slate.Editor} change
 */
function focusAtEnd(editor, next) {
    const { document } = editor.value;
    editor.moveToEndOfNode(document);
}

module.exports = focusAtEnd;
