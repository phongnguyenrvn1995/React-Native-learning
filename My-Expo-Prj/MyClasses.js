class Cat {
    static TAG = "CAT";
    profile;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.profile = this.name + ' ' + this.age;;
    }
}

export { Cat }