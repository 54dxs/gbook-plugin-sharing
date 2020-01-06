var _ = require('lodash');

module.exports = {
    book: {
        assets: './assets',
        js: [
            'buttons.js'
        ]
    },
    hooks: {
        config: function(cfg) {
            var sharingLink = _.get(cfg, 'links.sharing', {});
            cfg.pluginsConfig.sharing = _.defaults(cfg.pluginsConfig.sharing || {}, {});

            _.each(sharingLink, function(enabled, type) {
                if (enabled != false) return;

                if (type == 'all') cfg.pluginsConfig.sharing[type] = [];
                else cfg.pluginsConfig.sharing[type] = false;
            });

            return cfg;
        }
    }
};
