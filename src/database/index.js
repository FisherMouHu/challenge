'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // Record the Age of the User
        let userAge = {};

        for (const {username, age} of Object.values(db.usersById)) {
            userAge[`${username}`] = age;
        }

        // Count the Age according to the Item
        let itemAgeCount = {};

        for (const [key, value] of Object.entries(db.itemsOfUserByUsername)) {
            if (value.includes(item)) {
                const age = userAge[key];

                if (!itemAgeCount[`${age}`]) {
                    itemAgeCount[`${age}`] = 0;
                }

                itemAgeCount[`${age}`] += 1;
            }
        }

        return itemAgeCount;
    }
    return mockDBCall(dataAccessMethod);
}

// Get Item List
const getItems = () => {
    const dataAccessMethod = () => {
        const itemList = _.map(db.itemsOfUserByUsername, (user) => user);
        return [... new Set(itemList.flat())];
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};
