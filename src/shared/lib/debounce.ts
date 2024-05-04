function debounce<T = unknown>(func: (...args: T[]) => void, delay: number) {
    let timerId: NodeJS.Timeout;
    return function (...args: T[]) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

export {debounce}