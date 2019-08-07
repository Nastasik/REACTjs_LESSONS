export class User {
    constructor(entity) {
        Object.assign(this, {
            brand: '',
            title: '',
            description: '',
            descriptionFull: '',
            price: null,
            currency: ''
        }, entity)
    }
}

