module.exports= (sequelize,type)=>{
    return sequelize.define('apartment',{

        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apartment_number:type.STRING,
        mt2:type.STRING,
        price_mt2: type.STRING
    })








        
    
}