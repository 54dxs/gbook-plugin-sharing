require(['gbook', 'jquery'], function(gbook, $) {
    var SITES = {
        'facebook': {
            'label': 'Facebook',
            'icon': 'fa fa-facebook',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]='+encodeURIComponent(location.href));
            }
        },
        'twitter': {
            'label': 'Twitter',
            'icon': 'fa fa-twitter',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://twitter.com/home?status='+encodeURIComponent(document.title+' '+location.href));
            }
        },
        'google': {
            'label': 'Google+',
            'icon': 'fa fa-google-plus',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://plus.google.com/share?url='+encodeURIComponent(location.href));
            }
        },
        'weibo': {
            'label': 'Weibo',
            'icon': 'fa fa-weibo',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://service.weibo.com/share/share.php?content=utf-8&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title));
            }
        },
        'instapaper': {
            'label': 'Instapaper',
            'icon': 'fa fa-instapaper',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://www.instapaper.com/text?u='+encodeURIComponent(location.href));
            }
        },
        'vk': {
            'label': 'VK',
            'icon': 'fa fa-vk',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://vkontakte.ru/share.php?url='+encodeURIComponent(location.href));
            }
        }
    };



    gbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // 创建下拉菜单
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // 使用下拉菜单创建主按钮
        if (menu.length > 0) {
            gbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // 直接行动分享
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
