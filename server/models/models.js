const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketConsultation = sequelize.define('basket_consultation',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Consultation = sequelize.define('consultation',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull:false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ConsultationInfo = sequelize.define('consultation_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeAuthor = sequelize.define('type_author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketConsultation)
BasketConsultation.belongsTo(Basket)

Type.hasMany(Consultation)
Consultation.belongsTo(Type)

Author.hasMany(Consultation)
Consultation.belongsTo(Author)

Consultation.hasMany(BasketConsultation)
BasketConsultation.belongsTo(Consultation)

Consultation.hasMany(ConsultationInfo)
ConsultationInfo.belongsTo(Consultation)

Consultation.hasMany(ConsultationInfo, {as: 'info'})
ConsultationInfo.belongsTo(Consultation)

Type.belongsToMany(Author, {through: TypeAuthor })
Author.belongsToMany(Type, {through: TypeAuthor })

module.exports = {
    User,
    Basket,
    BasketConsultation,
    Consultation,
    ConsultationInfo,
    Type,
    Author,
    TypeAuthor
}