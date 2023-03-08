export const alertData = (name, price) => {
    name === '' && price === ''
        ? alert("이름과 가격을 입력하세요")
        : alert(`{ name: ${name}, price: ${price} }`);
}
export const toggleModal = (call) => {
    // e.stopPropagation();
    call((prev) => !prev);
}

export const getUiSet = (theme, size, style, shape) => {
    const GREEN_BACKGROUND = 'rgb(85, 239, 196)';
    const GREEN_COLOR = 'black';
    const RED_BACKGROUND = 'rgb(250, 177, 160)';
    const RED_COLOR = 'rgb(214, 48, 49)';
    const NONE_BACKGROUND = 'white';
    const widthTable = {
        large: '200px',
        medium: '118px',
        small: '88px',
    }
    const heightTable = {
        large: '50px',
        medium: '43px',
        small: '38px',
    }
    const result = {
        fontColor: '',
        backgroundColor: '',
        border: '',
        width: '',
        height: '',
        borderRadius: shape,
        fontWeight: 'normal',
    }


    switch (theme) {
        case 'green':
            result.fontColor = GREEN_COLOR;
            result.backgroundColor = GREEN_BACKGROUND;
            break;
        case 'red':
            result.fontColor = RED_COLOR;
            result.backgroundColor = RED_BACKGROUND;
            break;
        default:
            result.fontColor = GREEN_COLOR;
            result.backgroundColor = 'lightgray';
    }

    switch (size) {
        case 'large':
            result.width = widthTable.large;
            result.height = heightTable.large;
            result.fontWeight = "600";
            break;
        case 'medium':
            result.width = widthTable.medium;
            result.height = heightTable.medium;
            break;
        case 'small':
            result.width = widthTable.small;
            result.height = heightTable.small;
            break;
        default:
            result.width = '40px';
            result.height = '40px';
            break;
    }

    switch (style) {
        case 'border':
            result.border = `3px solid ${result.backgroundColor}`;
            result.backgroundColor = NONE_BACKGROUND;
            break;
        case 'color':
            result.border = 'none';
            break;
        default:
            result.border = '1px solid gray';
            break;
    }

    return result;
}