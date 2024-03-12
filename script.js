function fibonacci(num) {
    if (num <= 0) {
        return "Input must be a positive integer";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
