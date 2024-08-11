'use strict';

/**
 * myidea service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::myidea.myidea');
