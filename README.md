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
mode | string | ZZSZYFP
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期 }
taxPurchase | object | 购货单位信息 { name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户 }
taxDataList | array[object] | 货物数据列表 [{ name: *货物或应税劳务名称; type: 规格型号; unit: 单位; number: 数量; price: 单价; sum: *金额; rate: *税率; tax: 税额 }]
taxSales | object | 销货单位及价税合计信息 { totalB: 价税合计(大写); totalS: (小写); name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户; remark: 备注 }
ticketType | number | 开票类型 1: 代开发票; 2: 自开发票

### 增值税电子普通发票

name | type | description
-----| -----| ------------
mode | string | ZZSDZPTFP
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期 }
taxPurchase | object | 购货单位信息 { name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户 }
taxDataList | array[object] | 货物数据列表 [{ name: *项目名称; carNumber: 车牌号; type: 类型; dateStart: 通行日期起; dateEnd: 通行日期止; sum: *金额; rate: *税率; tax: 税额 }]
taxSales | object | 销货单位及价税合计信息 { totalB: 价税合计(大写); totalS: (小写); name: *名称; taxNumber: 纳税人识别号; addressPhone: 地址、电话; bank: 开户行及账户; remark: 备注 }
ticketType | number | 开票类型 1: 代开发票; 2: 自开发票

### 机动车销售统一发票

name | type | description
-----| -----| ------------
mode | string | JDCXSTYFP
prefixCls | string | cr-tax-c
taxHeader | object | 发票头部信息 { code: 发票代码; number: 发票号码; date: 开票日期 }
mainData | object | 发票主体信息 { machineCode: 机打代码; machineNumber: 机打号码; encipher: 机器编码; purchase:  *购买方名称及身份证号码/组织机构代码; purchaseTaxNumber: 纳税人识别号(购买方); carType: 车辆类型; factory: 厂牌型号; origin: *产地; certificate: 合格证号; importNumber: 进口证明书号; inspectionNumber: 商检单号; engineNumber: 发动机号码; carNumber: 车牌识别号/车架号码; totalB: 价税合计（大写）; totalS: *小写; sales: *销货单位名称; phone: 电话; salesTaxNumber: 纳税人识别号(销货方); account: 账号; address: 地址; bank: 开户银行; rate: *增值税税率或征收率; tax: *增值税税额; chargeTaxCode: 主管税务机关及代码; notTaxCount: *不含税价; taxCertificate: 完税凭证号码; weight: 吨位; maxNumber: 限乘人数 }

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
