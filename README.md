# get-input-selection

getInputSelection() provides carrot position for textarea. Works as selectionBegin and selectionEnd for all browsers

props go to http://stackoverflow.com/questions/235411/is-there-an-internet-explorer-approved-substitute-for-selectionstart-and-selecti

# usage

<code>
import getInputSelection from 'get-input-selection';

const { begin, end } = getInputSelection(textarea);
</code>
