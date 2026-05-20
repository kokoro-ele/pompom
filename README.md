<a href="https://lab.magiconch.com/sakana/?v=pompom" target="_blank">
  <img src="html/pompom.png" height="160px">
</a><a href="https://lab.magiconch.com/sakana/?v=cinnamon" target="_blank">
  <img src="html/cinnamon.png" height="160px">
</a>

# 🐟「Sakana!」石蒜模拟器

[![NPM](https://img.shields.io/npm/v/sakana)](https://www.npmjs.com/package/sakana)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

地址 https://lab.magiconch.com/sakana/

> さかなー－－－！！

日本語リードミー 
[docs/ja/README.md](docs/ja/README.md) 
[#53](https://github.com/itorr/sakana/pull/53)
[@OHMORIYUSUKE](https://github.com/OHMORIYUSUKE)

支持引入多个模拟器了！ [约会版](https://lab.magiconch.com/sakana/deto.html)

## 插画来源
大伏アオ
[@blue00f4](https://twitter.com/blue00f4)
[Pixiv](https://pixiv.me/aoiroblue1340)

**已从老师推特取得在网页中使用两张插画 (
[その1](https://twitter.com/blue00f4/status/1551887529615687680)、[その2](https://twitter.com/blue00f4/status/1552066743853813760)
) 的非商用授权**
`ヾ(^▽^ヾ)`


## 功能
 - 按住立牌拖拽、松手后立牌会向反方向弹跳
 - 点击底座切换角色
 - 手机开启陀螺仪权限、摇一摇可甩动立牌 [#12 待解决](https://github.com/itorr/sakana/pull/12)
 - 自走模式，以随机间隔、施加一个大小随机的力 [#7](https://github.com/itorr/sakana/pull/7) [@milkybird98](https://github.com/milkybird98)
 - 多语言支持 [#26](https://github.com/itorr/sakana/pull/26) [@dsrkafuu](https://github.com/dsrkafuu)
 
### 请求参数

 - 添加 `?v=cinnamon` 请求参数，可获得 [锦木千束](https://lab.magiconch.com/sakana/?v=cinnamon) 专属链接
 - 添加 `?v=pompom` 请求参数，可获得 [井上泷奈](https://lab.magiconch.com/sakana/?v=pompom) 专属链接
 - 添加 `?alpha=true` 请求参数，可获得透明背景 [例](https://lab.magiconch.com/sakana/?alpha=true)
 - 添加 `?background=red` 请求参数，可自定义背景 `#FF00FF` `'#d77 url(cinnamon.png)'` 均可 [例](https://lab.magiconch.com/sakana/?background=%23d77%20url(cinnamon.png))
 - 添加 `?decay=0.99` 请求参数，自定义衰减 [无阻尼例](https://lab.magiconch.com/sakana/?decay=1) [#11](https://github.com/itorr/sakana/issues/11)
 - 添加 `?inertia=0.1` 请求参数，自定义惯性 [超慢速例](https://lab.magiconch.com/sakana/?inertia=0.001)
 - 添加 `?lang=en-US` 请求参数，自定义语言 [英文](https://lab.magiconch.com/sakana/?lang=en-US) [日语](https://lab.magiconch.com/sakana/?lang=ja-JP)
 - 添加 `?scale=auto` 请求参数，在小尺寸时适应高度调整缩放
 - 添加 `?scale=0.5` 请求参数，自定义元素缩放比例
 - 添加 `?translateY=200px` 请求参数，自定义元素垂直位移
 - 添加 `?r=60` 请求参数，初始角色右倾 60 度
 - 添加 `?y=100` 请求参数，初始角色下沉 100 单位

#### 组合参数例
 - [超高速微阻尼千束英文例](https://lab.magiconch.com/sakana/?inertia=0.2&decay=0.999&v=cinnamon&lang=en-US)
 - [超慢速无阻尼泷奈日文例](https://lab.magiconch.com/sakana/?inertia=0.001&decay=1&v=pompom&lang=ja-JP)
 - [两倍慢速无阻尼千束例](https://lab.magiconch.com/sakana/?inertia=0.01&decay=1&v=cinnamon&scale=2&translateY=140px)
 - [超小没劲强阻尼泷奈例](https://lab.magiconch.com/sakana/?inertia=0.02&decay=0.9&scale=0.3)
 - [默认六十度一百高泷奈例](https://lab.magiconch.com/sakana/?v=pompom&r=60&y=100)


## 引入到个人网站

[示例](https://lab.magiconch.com/sakana/into.html)
[源码](https://github.com/itorr/sakana/blob/main/html/into.html)

```html
<div class="pompom"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/sakana"></script>
<script>
Sakana.init({
  el:         '.pompom',     // 启动元素 node 或 选择器
  scale:      .5,                // 缩放倍数
  canSwitchCharacter: true,      // 允许换角色
});
</script>
```

### NPM 安装与引入
```bash
npm i sakana -d
```

```javascript
import Sakana from 'sakana';

Sakana.init({
  el:         '.pompom',     // 启动元素 node 或 选择器
  scale:      .5,                // 缩放倍数
  canSwitchCharacter: true,      // 允许换角色
});
```

### 选项与方法 
```javascript
// 启动
const sakana = Sakana.init({
  // 选项: 默认值
  el:         '.pompom',     // 启动元素 node 或 选择器
  character:  'pompom',          // 启动角色 'cinnamon','pompom' 
  inertia:    0.01,              // 惯性
  decay:      0.99,              // 衰减
  r:          60,                // 启动角度
  y:          10,                // 启动高度
  scale:      1,                 // 缩放倍数
  translateY: 0,                 // 位移高度
  canSwitchCharacter: false,     // 允许换角色
  onSwitchCharacter(character){  // 切换角色回调
    console.log(`${character} dayo~`);
  },
});

// 设定归零角度
sakana.setOriginRotate(10);

// 获取角色运行状态
const v = sakana.getValue();

// 确保运行
sakana.confirmRunning();

// 切换角色
sakana.switchCharacter();

// 暂停动作
sakana.pause();

// 恢复动作
sakana.play();

// 切换特定角色
sakana.setCharacter('cinnamon');
```


### 放在窗口右下
```css
html .pompom{
  position: fixed;
  right: 0;
  bottom: 0;
  transform-origin: 100% 100%; /* 从右下开始变换 */
}
```

## 本地调试
`.less` 需要编译成 `.css` 样式文件 [#6](https://github.com/itorr/sakana/pull/6)

## 编译
 - `npm i`
 - `npm run build`（编译 `sakana.less`、`document.less` 为 `.css`，再打包 `sakana.min.js`）
 - 仅编译样式：`npm run build:css`

## GitHub Pages（Actions）

仓库已包含 [`.github/workflows/pages.yml`](.github/workflows/pages.yml)，推送 `main` 后会自动 `npm run build` 并发布 `html/` 目录。

1. 仓库 **Settings → Pages → Build and deployment**
2. **Source** 选 **GitHub Actions**（不是 Deploy from a branch）
3. 推送本仓库后，在 **Actions** 页查看 workflow；成功后访问  
   `https://kokoro-ele.github.io/pompom/`（`index.html`、`deto.html` 等同路径）

## GitHub
https://github.com/itorr/sakana/

## 衍生
 - 网页小组件版本 [Demo](https://sakana.dsrkafuu.net/) [@dsrkafuu/sakana-widget](https://github.com/dsrkafuu/sakana-widget) 
 - 壁纸引擎 @而我撑伞 [BV1vN4y1F7ML](https://www.bilibili.com/video/BV1vN4y1F7ML) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854221525)
 - 壁纸引擎 @麻匪 [BV1jG4y1k7oA](https://www.bilibili.com/video/bv1jG4y1k7oA) [创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=2854192204)
 - VSCode 插件 [@UFOAlastor/sakana-hop](https://github.com/UFOAlastor/sakana-hop)
 - Unity 版本 [@zxsean/sakana_Unity](https://github.com/zxsean/sakana_Unity)
 - 只因你太美版本 [@SyMind/ji](https://github.com/SyMind/ji)

## 微博
https://weibo.com/1197780522/M2xbREtGI


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022, itorr
