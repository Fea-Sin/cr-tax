import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import ZZSZY from './zzszyfp';
import ZZSDZ from './zzsdzptfp';
import JDCXS from './jdcxstyfp';


class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {
    const { prefixCls, taxHeader, taxPurchase, taxSales, taxDataList, ticketType, mode, mainData } = this.props

    if (mode === 'ZZSZYFP') {
      return (
        <ZZSZY
          prefixCls={prefixCls}
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
          taxDataList={taxDataList}
          ticketType={ticketType}
        />
      )
    } else if (mode === 'ZZSDZPTFP') {
      return (
        <ZZSDZ
          prefixCls={prefixCls}
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
          taxDataList={taxDataList}
          ticketType={ticketType}
        />        
      )
    } else if (mode === 'JDCXSTYFP') {
      return (
        <JDCXS
          prefixCls={prefixCls}
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
          taxDataList={taxDataList}
          mainData={mainData}
        />         
      )
    } else {
        <ZZSZY
          prefixCls={prefixCls}
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
          taxDataList={taxDataList}
          ticketType={ticketType}
        />      
    }
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  taxHeader: PropTypes.object,
  taxPurchase: PropTypes.object,
  taxSales: PropTypes.object,
  taxDataList: PropTypes.arrayOf(PropTypes.object),
  ticketType: PropTypes.number,
  mode: PropTypes.oneOf(['ZZSZYFP', 'ZZSDZPTFP', 'JDCXSTYFP'])
}
Comp.defaultProps = {
  prefixCls: 'cr-tax',
  taxDataList: [{}],
  ticketType: 1,
  mode: 'ZZSZYFP',
}
export default Comp