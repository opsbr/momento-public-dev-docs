---
sidebar_position: 4
sidebar_label: Develop
sidebar_class_name: "sidebar-item-api-reference"
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

inject-example-code-snippet// プラグインは、SdkExampleTabs のインスタンスを SdkExampleTabsImplimport{ SdkExampleTabsImpl }from "@site/src/components/SdkExampleTabsImpl" に変換します；

こんにちは！

# Momento SDKを使用したアプリケーションの開発

ようこそ！このページでは、MomentoのすべてのSDKでMomentoクライアントをアセンブルするために必要な一般的なコンストラクトに関する情報を提供します。このページでは、Momentoの認証情報（認証トークンと呼ばれます）の提供方法、クライアントの設定方法、エラー処理と本番環境への準備に関する基本的な情報を説明します。

<img src="/img/city.jpg" width="90%" alt="a technical illustration on a white background depicting the intersection of speed, ease of use, and security."/>

## キャッシュクライアントの作成

`CacheClient`は、Momento サービスと対話するためにコードで使用するメイン・オブジェクトです。インスタンスを作成するには、`CredentialProvider`、`Configuration`、およびデフォルトの TTL (time to live) 値を渡す必要があります。デフォルトの TTL は、その`CacheClient`を使用するアイテムがキャッシュから削除されるまでの保存期間を決定します。`Set`操作を実行する場合、その操作に固有のこの TTL 値をオーバーライドできます。詳細は、「[Momento Cache の TTL (Time-to-Live) によるデータの有効期限](/learn/how-it-works/expire-data-with-ttl)」を参照してください。

`CacheClient` を作成する例を示します：

\<SdkExampleTabs{'API_InstantiateCacheClient'}/>を参照してください。

## Momento 認証トークンを使用したクレデンシャル・プロバイダのインスタンス化

Momentoクライアントをインスタンス化する際に、Momento認証トークンを提供する必要があります。まだ持っていない場合は、[Momento Web Consoleから](https://console.gomomento.com/)取得できます。トークンを取得したら、`CredentialProviderの`インスタンスを作成する際にMomento SDKにトークンを提供します。環境変数または文字列から`CredentialProvider`オブジェクトを作成する便利なファクトリメソッドが用意されています。以下は、環境変数から`CredentialProvider を`インスタンス化する方法の例です：

\<SdkExampleTabs{'API_CredentialProviderFromEnvVar'}/>を使用します。

Momento 認証トークンを[AWS Secret Manager](https://aws.amazon.com/secrets-manager/)、[GCP Secret Manager](https://cloud.google.com/secret-manager)、ローカル設定ファイルなどのシークレットマネージャに保存している場合は、まずそこから認証情報を取得し、このように文字列から`CredentialProvider`をインスタンス化する必要があります：

\<SdkExampleTabs{'API_CredentialProviderFromString'}/>を使用します。

AWS Secrets Manager から認証情報を取得する方法の例については、[AWS Secrets Manager から Momento 認証トークンを取得するを](/develop/integrations/aws-secrets-manager)参照してください。

Momento 認証に関する一般的な情報は、[認証のページを](/develop/authentication)参照ください。

さらに詳しい情報は、[レスポンスオブジェクトの](/develop/api-reference/response-objects)ページや、使用している SDK のドキュメント (左ナビの`Develop ->``SDKs`) を参照してください。
