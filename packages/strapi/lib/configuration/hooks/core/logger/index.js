'use strict';

/**
 * Logger hook
 */

module.exports = strapi => {
  return {

    /**
     * Default options
     */

    defaults: {
      logger: true
    },

    /**
     * Initialize the hook
     */

    initialize: cb => {
      if (strapi.config.logger === true) {
        strapi.app.use(function * (next) {
          const start = new Date();
          yield next;
          const ms = new Date() - start;
          strapi.log.debug(this.method + ' ' + this.url + ' (' + ms + 'ms)');
        });
      }

      cb();
    }
  };
};
