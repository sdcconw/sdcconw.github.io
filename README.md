# SDCCONW サイト

## サイトについて

NuxtJS 3で作られています。

## Served from バッジについて

`/serverinfo.json`にアクセスした際の情報を表示します。

書式は下記のとおりです。

```json
{
    "server": "Cloud"
}
```

Served fromバッジの初期情報は、`/public/serverinfo.json`に保存されています。
各サーバへのデプロイ前に変更するか、nginx等でこの値を書き換えてください。

### Unknown表記の場合

キーの指定が間違っているか、リクエストが失敗した場合に表示されます。
