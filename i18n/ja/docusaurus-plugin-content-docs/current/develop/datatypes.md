---
sidebar_position: 4
sidebar_label: Data Types
sidebar_class_name: sidebar-item-data-types
title: Supported data types
pagination_prev: null
pagination_next: null
description: Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.
---

こんにちは！

# Momento CacheおよびMomento Topicsでサポートされるデータ型

Momento Cache は、さまざまなプログラミング言語の一般的な型に対応するコアデータ型を提供します。このページには、核となるデータ型の一覧と、それぞれのデータ型に関する情報があります。

![様々なデータ型とアイデアの高速移動のイメージ](./../../static/img/more-data-types.jpg)

## Momento Cacheのコア・データ型とトピック

### バイト配列

保存されるデータはすべてバイト配列で表現されます。Momento SDKは、データを生のバイトまたは移植可能なUTF-8文字列として格納するために使用できる簡単な方法を提供します。文字列、文字、数値などのスカラーデータ、画像やProtocol Buffersの直列化配列などのバイナリデータがあります。

### コレクション・データ型（CDT）

コレクション・データ型は、関連するデータを1つの項目にまとめたものです。これらはバイト配列の値として格納され、Momento SDKではそれぞれ独自のAPIコールが用意されています。例えば、DictionaryFetch、ListFetch、SetFetchなどです。

<img src="/img/collection_data_types.png" alt="Collection data types drawing | Momento Cache" width="80%"/>

#### リスト

リストは、順序付けられた要素のコレクションで、各要素が挿入された順序でソートされます。

```javascript
"Hoover’s Sour Cream Cookies" = [
  "1 cup butter (2 sticks), room temperature",
  "1 cup granulated sugar",
  "1 cup brown sugar, packed",
  "3 eggs, room temperature",
  "1 cup sour cream, room temperature",
  "1 tsp pure vanilla extract",
  "3 cups all-purpose flour",
  "1 tsp baking powder",
  "1 tsp baking soda",
  "1 tsp salt"
]
```

API メソッドを学ぶには、[リスト・コレクション](./api-reference/list-collections.md)・データ型の API リファレンスを参照してください。

#### 辞書

辞書は順序付けされていない要素の集まりで、各要素はフィールド:値のペアです。

ディクショナリを使用する例としては、データをまとめて保存し、フィールド：値のペアを名前で取り出す必要がある場合などがあります。

```javascript
"truck546" = {
    "brand" : "Ford",
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```

API メソッドを学ぶには、[辞書](./api-reference/dictionary-collections.md)コレクション・データ型の API リファレンスを参照してください。

#### 集合

セットは、それぞれが文字列形式の、一意の要素の順序なしコレクションです。たとえば、'sugar'を何度セットに追加しても、'sugar'のエントリは1つしかありません。

```javascript
"myIngredients" = {
    "water",
    "sugar",
    "ground cinnamon",
    "all-purpose flour",
    "baking soda",
    "raisins"
}
```

API メソッドを学ぶには、[集合](./api-reference/set-collections.md)コレクション・データ型の API リファレンスを参照してください。

#### ソートされた集合

ソートされた集合は、値 (string) とスコア (signed double 64-bit float) のペアを持つ一意な要素の集まりです。項目の要素はスコア値順に並べられます。例えば

```javascript
"players" = {
    "SorataABard" : 32.7,
    "Juliversal" : 30.45,
    "DragonNosy" : 26.8,
    "redbyrd" : 26.8,
    "SaltyAdjeley" : 23.25,
    "ZachAttack" : 17.3,
    "ElyahouBeets" : 5.0,
    "Smashley" : 3.2"
}
```

:::ノート

要素が同じスコアを持つ場合、それらは[辞書順に](https://www.dictionary.com/browse/lexicographically)並べ替えられます。

:::

API メソッドを学ぶには、[並べ替えセット・コレクション](./api-reference/sorted-set-collections.md)・データ型の API リファレンスを参照してください。

## よくある質問

<details>
 <summary>辞書項目からデータのサブセットを取得するためにAPIコールを実行した場合、項目全体のサイズはGBあたりの転送コストにカウントされますか?</summary>
いいえ、カウントされません。たとえば、APIコールDictionaryGetFieldを実行して、ディクショナリ項目全体が50キロバイトであるディクショナリから5キロバイトのフィールド:値のペアを1つ取得する場合、GBあたりの転送コストにカウントされるのは5キロバイトだけです。
</details>

<details>
 <summary>JSONドキュメントをMomento Cacheに保存するには？</summary>
お気に入りの JSON ライブラリを使用して JSON ドキュメントをバイト配列にシリアライズし、そのバイト配列を Momento Cache に挿入します。JSON ドキュメントの各フィールド値を辞書に格納することもできます。
</details>

<details>
 <summary>Momento Cacheは、コレクションデータ型にネストされたデータを保存しますか？</summary>
直接ではありません。このデータを JSON オブジェクトとして保存し、お気に入りの JSON ライブラリを使用して JSON ドキュメントをバイト配列にシリアライズし、そのバイト配列を Momento Cache に挿入するのが最良の方法です。
</details>

<details>
 <summary>インクリメントAPIを使用する場合、要素はどのようにフォーマットすればよいですか？</summary>
インクリメントAPIコールで使用する要素は、基数10の整数を表すUTF-8文字列として格納する必要があります。要素がその形式でない場合、APIコールはフォーマットエラーを投げます。
</details>
