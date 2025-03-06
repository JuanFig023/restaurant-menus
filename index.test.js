const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const restaurant = await Restaurant.create(seedRestaurant[0]);
        expect(restaurant.name).toEqual(seedRestaurant[0].name);
        expect(restaurant.location).toEqual(seedRestaurant[0].location)
        expect(restaurant.cuisine).toEqual(seedRestaurant[0].cuisine)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const menu = await Menu.create(seedMenu[0]);
        expect(menu.title).toEqual(seedMenu[0].title);
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const restaurant = await Restaurant.create(seedRestaurant[0]);
        await restaurant.update({name: "Flanigans", location: "Florida", cuisine: "American"});
        expect(restaurant.name).toEqual("Flanigans");
        expect(restaurant.location).toEqual("Florida");
        expect(restaurant.cuisine).toEqual("American");
    });

    test('can find Menus', async () => {
        // TODO - write test
        const menu = await Menu.create(seedMenu[0]);
        await menu.update({title: "Brunch"});
        expect(menu.title).toEqual("Brunch");
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const restaurant = await Restaurant.create(seedRestaurant[0]);
        await restaurant.destroy();
        const foundRestaurant = await Restaurant.findByPk(restaurant.id);
        expect(foundRestaurant).toBeNull();
    });

    test('can delete Menu', async () => {
        // TODO - write test
        const menu = await Menu.create(seedMenu[0]);
        await menu.destroy();
        const foundMenu = await Menu.findByPk(Menu.id);
        expect(foundMenu).toBeNull();
    });

})