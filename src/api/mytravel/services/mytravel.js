'use strict';

/**
 * mytravel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mytravel.mytravel');
