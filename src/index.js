import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import ZZSZY from './zzszyfp';
import ZZSDZ from './zzsdzptfp';
import JDCXS from './jdcxstyfp';
import ZZSPT from './zzsptfp';
import GSTYJD from './GSTYJD';
import PTFPJP from './PTFPJP';
import ZZSDZTXF from './zzsdzptfptxf';
import HGJKZZS from './HGJKZZS';


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
    const { prefixCls, taxDataList, ticketType, mode, direction, taxConfig } = this.props

    if (mode === 'ZZSZYFP') {
      return (
        <ZZSZY
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
          ticketType={ticketType}
          direction={direction}
        />
      )
    } else if (mode === 'ZZSDZPTFP') {
      return (
        <ZZSDZ
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
          ticketType={ticketType}
          direction={direction}
        />        
      )
    } else if (mode === 'JDCXSTYFP') {
      return (
        <JDCXS
          prefixCls={prefixCls}
          taxConfig={taxConfig}
        />         
      )
    } else if (mode === 'ZZSPTFP') {
      return (
        <ZZSPT
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
          ticketType={ticketType}
          direction={direction}
        />         
      )
    } else if (mode === 'ZZSDZTXF') {
      return (
        <ZZSDZTXF
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
          ticketType={ticketType}
          direction={direction}
        />         
      )
    } else {
        <ZZSZY
          prefixCls={prefixCls}
          taxConfig={taxConfig}
          taxDataList={taxDataList}
          ticketType={ticketType}
        />      
    }
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  taxConfig: PropTypes.object,
  taxDataList: PropTypes.arrayOf(PropTypes.object),
  ticketType: PropTypes.number,
  mode: PropTypes.oneOf(['ZZSZYFP', 'ZZSDZPTFP', 'JDCXSTYFP', 'ZZSPTFP', 'ZZSDZTXF']),
  direction: PropTypes.oneOf(['in', 'out']),
}
Comp.defaultProps = {
  prefixCls: 'cr-tax',
  taxDataList: [{}],
  ticketType: 2,
  mode: 'ZZSZYFP',
  direction: 'in',
}

export {
  GSTYJD,
  PTFPJP,
  HGJKZZS,
}
export default Comp
