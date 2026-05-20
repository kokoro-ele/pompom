const UglifyJS = require('uglify-js');
const CleanCSS = require('clean-css');
const fs = require('fs');
const {
  readFileSync,
  writeFileSync,
} = fs;

const toMD5 = data=>require('crypto').createHash('md5').update(data).digest('hex');

const UglifyOptions = {
  parse: {},
  compress: {
    drop_console: false,
  },
  mangle: {},
  output: {
    comments: false,    // 移除注释
  },
  sourceMap: false,
  keep_fnames: false,   // 防止丢弃或损坏函数名
  toplevel: false,    // 混淆最高作用域中的变量和函数名
  warnings: false,
};


const CleanCSSOptions = {
  report: 'min',
  sourceMap: false
};



let sakanaJSCode = readFileSync('html/sakana.js', 'utf8');

const cssTextMinify = new CleanCSS(CleanCSSOptions).minify(readFileSync('html/sakana.css','utf8'));
const cssTextMinifyStyles = cssTextMinify.styles;

sakanaJSCode = sakanaJSCode.replace(
  '/* css */',
  `const styleEl=document.createElement('style');styleEl.innerHTML=${JSON.stringify(cssTextMinifyStyles)};document.head.appendChild(styleEl);`
);


const fileNames = [
  // 'sakana.css',
  'cinnamon.png',
  'pompom.png',
  'blue00f4.png',
];
const Types = {
  png: 'image/png',
  css: 'text/css;charset=utf-8'
};
const extRegEx = /\.(.+?)$/;
function getImageType(str){
  const ext = str.match(extRegEx)[1];
  return Types[ext]
}

const fileNamesRegExpG = new RegExp('('+fileNames.join('|')+')','g');
const fileNamesRegExp = new RegExp('('+fileNames.join('|')+')');

// uglify 压缩
const sakanaJSCodeMinify = UglifyJS.minify(sakanaJSCode, UglifyOptions);
if (sakanaJSCodeMinify.error) {
  console.error(sakanaJSCodeMinify.error);
  process.exit(1);
}
const sakanaJSCodeMinifyCode = sakanaJSCodeMinify.code;

const sakanaJSCodeMinifyCodeReplaced = sakanaJSCodeMinifyCode.replace(fileNamesRegExpG,fileName=>{
  const data = readFileSync('html/'+fileName,'binary');
  const buffer = Buffer.from(data, 'binary');
  return 'data:'+ getImageType(fileName) +';base64,'+ buffer.toString('base64') +'';
});

const md5 = toMD5(sakanaJSCodeMinifyCodeReplaced);

console.log(md5)
writeFileSync(`html/sakana.min.js`,sakanaJSCodeMinifyCodeReplaced,'utf8');