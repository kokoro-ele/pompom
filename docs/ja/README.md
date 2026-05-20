<a href="https://lab.magiconch.com/sakana/?v=pompom" target="_blank">
  <img src="../../html/pompom.png" height="160px">
</a><a href="https://lab.magiconch.com/sakana/?v=cinnamon" target="_blank">
  <img src="../../html/cinnamon.png" height="160px">
</a>

# 🐟「Sakana!」リコリス紙人形劇

[![NPM](https://img.shields.io/npm/v/sakana)](https://www.npmjs.com/package/sakana)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

デモ https://lab.magiconch.com/sakana/

> さかなー－－－！！

複数のシチュエーションに対応しました！ [デート編](https://lab.magiconch.com/sakana/deto.html)

## イラストの出典

大伏アオ
[@blue00f4](https://twitter.com/blue00f4)
[Pixiv](https://pixiv.me/aoiroblue1340)

**イラスト 2 点（[その 1](https://twitter.com/blue00f4/status/1551887529615687680)、[その 2](https://twitter.com/blue00f4/status/1552066743853813760)）の WEB ページでの掲載について、大伏アオ先生より非商用利用の許諾を得ました。
) **
`ヾ(^▽^ヾ)`

## 機能

- キャラクターをドラッグし、離すと反対方向にスイングします。
- 台座をクリックするとキャラクターが切り替わります。
- ジャイロセンサが使えるスマートフォンでは、スマートフォンを振ることで、キャラクターをスイングさせる。 [#12 解決予定](https://github.com/itorr/sakana/pull/12)
- キャラクターにランダムな大きさの力をランダムな間隔で加える自走式モード [#7](https://github.com/itorr/sakana/pull/7) [@milkybird98](https://github.com/milkybird98)
- 多言語対応 [#26](https://github.com/itorr/sakana/pull/26) [@dsrkafuu](https://github.com/dsrkafuu)

### リクエストパラメーター

- リクエストパラメータに `?v=cinnamon` を追加すると、[錦木千束](https://lab.magiconch.com/sakana/?v=cinnamon) になります。
- リクエストパラメータに `?v=pompom` を追加すると、[井ノ上たきな](https://lab.magiconch.com/sakana/?v=pompom) になります。
- リクエストパラメータに `?alpha=true` を追加すると、背景が透過されます。 [例](https://lab.magiconch.com/sakana/?alpha=true)
- リクエストパラメータに `?background=red` を追加すると、背景をカスタマイズできます。 `#FF00FF` `'#d77 url(cinnamon.png)'` を利用できます。 [例](<https://lab.magiconch.com/sakana/?background=%23d77%20url(cinnamon.png)>)
- リクエストパラメータに `?decay=0.99` を追加すると、キャラクターの動きの減衰の大きさを指定できます。 [減衰なしの例](https://lab.magiconch.com/sakana/?decay=1) [#11](https://github.com/itorr/sakana/issues/11)
- リクエストパラメータに `?inertia=0.1` を追加すると、慣性の大きさを指定できます。 [スーパースローの例](https://lab.magiconch.com/sakana/?inertia=0.001)
- リクエストパラメータに `?lang=en-US` を追加すると、言語を指定できます。 [英語](https://lab.magiconch.com/sakana/?lang=en-US) [日本語](https://lab.magiconch.com/sakana/?lang=ja-JP)
- リクエストパラメータに `?scale=auto` を追加すると、キャラクターが小さい場合に身長と大きさを調整します。
- リクエストパラメータに `?scale=0.5` を追加すると、キャラクターを拡大縮小できます。
- リクエストパラメータに `?translateY=200px` を追加すると、Y 軸方向の変位を指定できます。
- リクエストパラメータに `?r=60` を追加すると、初期の傾きが 60 度になります。
- リクエストパラメータに `?y=100` を追加すると、初期位置が Y 軸方向 100 の位置になります。

#### パラメータの組み合わせの例

- [超高速振動の千束の英語表記例](https://lab.magiconch.com/sakana/?inertia=0.2&decay=0.999&v=cinnamon&lang=en-US)
- [超低速スイングのたきなの日本語例](https://lab.magiconch.com/sakana/?inertia=0.001&decay=1&v=pompom&lang=ja-JP)
- [大きさが 2 倍で低速の減衰なし千束の例](https://lab.magiconch.com/sakana/?inertia=0.01&decay=1&v=cinnamon&scale=2&translateY=140px)
- [超小型・慣性弱・強減衰 たきなの例](https://lab.magiconch.com/sakana/?inertia=0.02&decay=0.9&scale=0.3)
- [デフォルト角度 60 度で Y 軸 100 の位置 のたきなの例](https://lab.magiconch.com/sakana/?v=pompom&r=60&y=100)

## 個人サイトに導入

[例](https://lab.magiconch.com/sakana/into.html)
[ソースコード](https://github.com/itorr/sakana/blob/main/html/into.html)

```html
<div class="pompom"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/sakana"></script>
<script>
  Sakana.init({
    el: ".pompom", // 開始位置。ノードまたはセレクタ
    scale: 0.5, // 倍率
    canSwitchCharacter: true, // キャラクターの切り替え
  });
</script>
```

### オプションとメソッド

```javascript
// 初期化
const sakana = Sakana.init({
  // オプション：デフォルト
  el: ".pompom", // 開始位置。ノードまたはセレクタ
  character: "pompom", // キャラクターを指定。「ちさと」または「たきな」。
  inertia: 0.01, // 慣性
  decay: 0.99, // 減衰
  r: 60, // 初期角度
  y: 10, // 初期高さ
  scale: 1, // 倍率
  translateY: 0, // Y軸方向の高さ
  canSwitchCharacter: false, // キャラクターの切り替え
  onSwitchCharacter(character) {
    // キャラクターを切り替えた時に呼ばれる
    console.log(`${character} dayo~`);
  },
});

// 角度を指定
sakana.setOriginRotate(10);

// キャラクターの状態を取得する
const v = sakana.getValue();

// 動作確認
sakana.confirmRunning();

// キャラクターを切り替え
sakana.switchCharacter();

// ポーズ(一時停止)
sakana.pause();

// 動作を再開
sakana.play();

// キャラクターを指定
sakana.setCharacter("cinnamon");
```

### ウィンドウの右下に配置

```css
html .pompom {
  position: fixed;
  right: 0;
  bottom: 0;
  transform-origin: 100% 100%; /* 右下に配置するために変更 */
}
```

## ローカル環境での変更

`document.less` を `.css` に変換する必要があります。 [#6](https://github.com/itorr/sakana/pull/6)

## 実行

- `npm i`
- `npm run build`

## GitHub

https://github.com/itorr/sakana/

## 派生プロジェクト

- ウェブウィジェット版 [Demo](https://sakana.dsrkafuu.net/) [@dsrkafuu/sakana-widget](https://github.com/dsrkafuu/sakana-widget)
- 動画 @而我撑伞 [BV1vN4y1F7ML](https://www.bilibili.com/video/BV1vN4y1F7ML) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854221525)
- 動画 @麻匪 [BV1jG4y1k7oA](https://www.bilibili.com/video/bv1jG4y1k7oA) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854192204)
- VSCode プラグイン [@UFOAlastor/sakana-hop](https://github.com/UFOAlastor/sakana-hop)
- Unity バージョン [@zxsean/sakana_Unity](https://github.com/zxsean/sakana_Unity)

## SNS

https://weibo.com/1197780522/M2xbREtGI

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022, itorr
