const persianNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export const convertToPersianNumbers = number=>{
    var chars = number.split('');
    for (var i = 0; i < chars.length; i++) {
        if (/\d/.test(chars[i])) {
            chars[i] = persianNumbers[chars[i]];
        }
    }
    return chars.join('');
}