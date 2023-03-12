import {makeAutoObservable} from "mobx";

export default class ConsultationStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Витаминки'},
            {id: 2, name: 'Рацион питания'},
            {id: 3, name: 'Пиздюль за дело'},
            {id: 4, name: 'Пиздюль для профилактики'}
        ]
        this._authors = [
            {id: 1, name: 'Анна Тюнина'},
            {id: 2, name: 'Эллина Тюнина'}
        ]
        this._consultations = [
            {id: 1, name: 'Простая консультация', price: 100000, img: `https://cs8.pikabu.ru/avatars/2340/x2340550-1264942680.png`},
            {id: 2, name: 'Простая консультация', price: 100000, img: `https://cs8.pikabu.ru/avatars/2340/x2340550-1264942680.png`},
            {id: 3, name: 'Простая консультация', price: 100000, img: `https://cs8.pikabu.ru/avatars/2340/x2340550-1264942680.png`},
            {id: 4, name: 'Простая консультация', price: 100000, img: `https://cs8.pikabu.ru/avatars/2340/x2340550-1264942680.png`}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setAuthors(authors) {
        this._authors = authors
    }
    setConsultations(consultations) {
        this._consultations = consultations
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get authors() {
        return this._authors
    }
    get consultations() {
        return this._consultations
    }
    get selectedType() {
        return this._selectedType
    }
}