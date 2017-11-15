# Sequelize implementation reference

#### Foreign Keys:

- By default the foreign key for a belongsTo relation will be generated from the target model name and the target primary key name.
- Change by defining:

Example: (in create migration)

    `activities_id: {
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
       references: {
         model: 'Activities',
         key: 'activities_id'
       }
     }`

Example: (in define model)

    `associate: function (models) {
       ActivityCategory.belongsTo(models.Activity, {
         foreignKey: 'FK_activities_id',
         targetKey: 'activities_id',
         onDelete: 'CASCADE'
       });
     }
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


#### Eager Loading documentation

http://sequelize.readthedocs.io/en/v3/docs/models-usage/#eager-loading