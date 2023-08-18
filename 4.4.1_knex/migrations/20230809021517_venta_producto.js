/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('venta_producto').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("venta_producto", function (table) {
              table.string("sku_producto").primary();
              table.integer("id_venta").primary();
              table.float("cantidad").notNullable();
              table.foreign("sku_producto").references("producto.sku");
              table.foreign("id_venta").references("venta.id");
            });
          }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
