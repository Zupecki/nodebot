const isPositiveInteger = (num:number):boolean => {
    return typeof(num) === 'number' &&
        isFinite(num) && num >= 0 &&
        Math.round(num) === num
}

export { isPositiveInteger };