export class StorageService {
    loaded = false;

    getItem(name) {
        const value = localStorage[name] && localStorage[name] !== 'undefined' ? JSON.parse(localStorage.getItem(name)) : {};
        return value;
    }

    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    removeItem(name) {
        localStorage.removeItem(name);
    }

    clear() {
        localStorage.clear();
    }
}

