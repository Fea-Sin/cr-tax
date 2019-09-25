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
    const { prefixCls, taxHeader, taxPurchase, taxSales, taxDataList, ticketType, mode, mainData, direction } = this.props

    if (mode === 'ZZSZYFP') {
      return (
        <ZZSZY
          prefixCls={prefixCls}
          taxHeader={taxHeader}
          taxPurchase={taxPurchase}
          taxSales={taxSales}
          taxDataList={taxDataList}
          ticketType={ticketType}
          direction={direction}
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
          direction={direction}
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
  mode: PropTypes.oneOf(['ZZSZYFP', 'ZZSDZPTFP', 'JDCXSTYFP']),
  direction: PropTypes.oneOf(['in', 'out']),
}
Comp.defaultProps = {
  prefixCls: 'cr-tax',
  taxDataList: [{}],
  ticketType: 2,
  mode: 'ZZSZYFP',
  direction: 'in',
}
export default Comp