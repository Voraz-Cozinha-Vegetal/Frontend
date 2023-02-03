function getUserData() {
    const data = localStorage.getItem("Voraz");
    return data ? JSON.parse(data) : null;
};

function setLocalStorageData(data) {
    return localStorage.setItem("Voraz", JSON.stringify(data));
};

export { getUserData, setLocalStorageData };
