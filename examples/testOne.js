import React from 'react'
import ReactDOM from 'react-dom'
import Testone from 'cr-tax'
import '../assets/index.less'

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                // border: 1px solid #11d0bc;
                                // padding: 10px;
                                // margin-bottom: 10px;
                               `
const boxStyle = {
  // width: 1150,
  // height: 'auto',
  // margin: '0 auto',
  // border: '1px solid green',
}

const taxHeader = {
  number: '2897454',
  code: '4646456',
  date: '20190911',
}
const taxPurchase = {
  name: '南京智慧科技有限公司',
  taxNumber: '142704654502922440',
  addressPhone: '南京南路 123456',
  bank: '',
}
const taxSales = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '¥2,013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-7878505',
  bank: '农行运城北城支行56600104454502242',
  remark: '',
}
const taxSalesB = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '¥2,013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-44520505',
  bank: '农行运城北城支行56600104545002242',
  remark: '',
}
const taxDataList = [{
  name: '*钢件*电池阴极金具',
  billNumber: 'ER602EGK6001',
  modelUnit: '个',
  modelCount: '3,000.00',
  modelPrice: '3,000.00',
  price: '3,000.00',
  taxRate: 0.16,
  billTaxValue: '435435.16',
}, {}, {}]

const taxDataListB = [{
  name: '*锻件*通行费',
  carNumber: 'ER602EGK6001',
  type: '个',
  dateStart: '20180108',
  dateEnd: '20180108',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {
  name: '*锻件*通行费',
  carNumber: 'ER602EGK6001',
  type: '个',
  dateStart: '20180901',
  dateEnd: '20180901',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {}]

const mainData = {
  machineCode: '0001',
  machineNumber: '0002',
  encipher: '0003',
  purchase: '南京智慧科技有限公司',
  purchaseTaxNumber: '45455656',
  carType: '轿车',
  factory: '梅赛德斯',
  origin: '德国',
  certificate: '0004',
  importNumber: '0005',
  inspectionNumber: '0006',
  engineNumber: '0007',
  carNumber: '0008',
  totalB: '壹百万',
  totalS: '¥1,000',
  sales: '0009',
  phone: '00010',
  salesTaxNumber: '00011',
  account: '00012',
  address: '00013',
  bank: '00014',
  rate: '00015',
  tax: '00016',
  chargeTaxCode: '00017',
  notTaxCount: '00018',
  taxCertificate: '00019',
  weight: '00020',
  maxNumber: '00021'
}

function render(container) {
  ReactDOM.render(
    <div>
      <div style={boxStyle}>
        <Testone
          // taxHeader={taxHeader}
          // taxPurchase={taxPurchase}
          // ticketType={1}
          direction='in'

          taxSales={taxSales}
          taxDataList={taxDataList}
          mode={'ZZSZYFP'}
          
          // taxSales={taxSalesB}
          // taxDataList={taxDataListB}
          // mode={'ZZSDZPTFP'}
          
          // mode={'JDCXSTYFP'}
          // prefixCls={'cr-tax-c'}
          // mainData={mainData}
        />
      </div>
    </div>, container
  )
}

render(reactContainer)