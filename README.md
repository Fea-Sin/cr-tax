# cr-tax

react component tax and bill styles

## example view
<img src="./github/example1.jpg" alt="example" />

## Usage
how can i use

## API

### 增值税专用发票

name | type | description
-----| -----| ------------
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期 }
taxPurchase | object | 购货单位信息 { name: 名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户 }

### 增值税电子普通发票

### 机动车销售统一发票

## Development

```
cnpm install
npm start
```

## Example

http://localhost:8018/examples/testOne.html

## Test
  ```js
  npm test
  
  npm run coverage
  ```



## License

cr-comp is released under the MIT license.
