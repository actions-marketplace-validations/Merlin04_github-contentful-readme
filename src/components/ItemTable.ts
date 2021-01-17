const TR_CLOSE = `
</tr>`;

const TR_OPEN = `
<tr>`;

export default function ItemTable(items: string[], colCount: number, colWidth?: number) {
    let result = `<table>`;

    for(let i = 0; i < items.length; i++) {
        if(i % colCount === 0) {
            if(i !== 0) {
                result += TR_CLOSE
            }
            result += TR_OPEN
        }
        result += `
<td valign="top"${colWidth !== undefined ? ` width="${colWidth}px"` : ``}>${items[i]}</td>`;
    }
    result += TR_CLOSE;

    return result + `
</table>`;
}