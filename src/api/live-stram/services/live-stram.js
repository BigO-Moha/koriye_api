'use strict';

/**
 * live-stram service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-stram.live-stram');
