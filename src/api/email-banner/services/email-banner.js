'use strict';

/**
 * email-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-banner.email-banner');
