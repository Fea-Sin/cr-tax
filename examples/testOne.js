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
  taxNumber: '142701602922440',
  addressPhone: 'test 123456',
  bank: '',
}
const taxSales = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '¥2,013.76',
  name: '南京云帐房有限公司',
  taxNumber: '789754654444464',
  addressPhone: '',
  bank: '',
  remark: '',
}

function render(container) {
  ReactDOM.render(
    <div>
      <div style={boxStyle}>
        <Testone
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
        />
      </div>
    </div>, container
  )
}

render(reactContainer)