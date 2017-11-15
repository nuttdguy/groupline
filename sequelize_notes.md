# Sequelize implementation reference

#### Foreign Keys:

- By default the foreign key for a belongsTo relation will be generated from the target model name and the target primary key name.
- Change by defining:


#### Eager Loading documentation

http://sequelize.readthedocs.io/en/v3/docs/models-usage/#eager-loading

Example (Activity hasMany > ActivityCategory.belongsTo(Activity): (in create migration)
- defineprimaryKey:

     `activityId: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,
         field: 'activity_id'
       },`

    `activityCategoriesId: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,
         field: 'activity_categories_id'
       },
     activityId: {
       type: Sequelize.INTEGER,
       field: 'activity_id',
       foreignKey: {
         model: 'Activities',
         key: 'activity_id'
       }
     }`

Example (hasMany > belongsTo): (in define model)


    `activityId: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         field: 'activity_id'
       },`
           

    `Activity.associate = function (models) {
     
         Activity.hasMany(models.ActivityCategory, {
           foreignKey: 'activity_id',
           targetKey: 'activity_id'
         });
     
         Activity.hasMany(models.ActivityTag, {
           foreignKey: 'activity_id',
           targetKey: 'activity_id'
         });
     
         Activity.hasMany(models.ActivityDetail, {
           foreignKey: 'activity_id',
           targetKey: 'activity_id'
         });
     
       };
    `

#### When defining Model notes, i.e. not in migration

NOTES #1
- boolean, or a string. If you provide the same string for multiple columns, they will form a
- composite unique key.
- uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex' },
- uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex' },

NOTES #2 ( SEQUELIZE CREATES MODELS AS CAMEL-CASE BY DEFAULT )
- You can specify a custom field name via the 'field' attribute:
- fieldWithUnderscores: { type: Sequelize.STRING, field: 'field_with_underscores' },


