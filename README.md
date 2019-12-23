# 分享插件
此插件在GBook网站工具栏中添加了共享按钮，以便在社交网络上共享图书。

### 禁用此插件

这是默认插件，可以使用以下 `book.json` 配置禁用它：

```
{
    plugins: ["-sharing"]
}
```

### 配置设置说明

可以在 `book.json` 文件中对该插件进行配置

默认配置为:

```js
{
    "pluginsConfig": {
        "sharing": {
            "facebook": true,
            "twitter": true,
            "google": false,
            "weibo": false,
            "instapaper": false,
            "vk": false,
            "all": [
                "facebook", "google", "twitter",
                "weibo", "instapaper"
            ]
        }
    }
}
```

