import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
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
  width: 1150,
  height: 'auto',
  margin: '0 auto',
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
  type: 'ER602EGK6001',
  unit: '个',
  number: '3,000.00',
  price: '3,000.00',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {
  name: '*钢件*电池阴极金具',
  type: 'ER602EGK6001',
  unit: '个',
  number: '3,000.00',
  price: '3,000.00',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {}, {}, {}]

const taxDataListB = [{
  name: '*锻件*通行费',
  type: 'ER602EGK6001',
  unit: '个',
  number: '20180108',
  price: '20180108',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {
  name: '*锻件*通行费',
  type: 'ER602EGK6001',
  unit: '个',
  number: '20180901',
  price: '20180901',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {}, {}, {}]


function render(container) {
  ReactDOM.render(
    <div>
      <div style={boxStyle}>
        <Testone
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          ticketType={1}

          taxSales={taxSales}
          taxDataList={taxDataList}
          mode={'ZZSZYFP'}
          
          // taxSales={taxSalesB}
          // taxDataList={taxDataListB}
          // mode={'ZZSDZPTFP'}
          
          // mode={'JDCXSTYFP'}
          // prefixCls={'cr-tax-c'}
        />
      </div>
    </div>, container
  )
}

render(reactContainer)