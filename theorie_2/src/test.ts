function getValue(x: number) : number {
    if (x < 0) {
        throw new Error('Значение не может быть отрицательным');
    }
    return x;
}