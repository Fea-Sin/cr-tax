import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Radio, Icon } from 'antd';

class Footer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ticketType: null,
    }
  }

  render() {
    const { prefixCls, footerConfig } = this.props

    return (
      <div className={`${prefixCls}-footer`}>
        {
          footerConfig.direction === 'in'
          ? (
            <div>
              <span>认证状态:</span>
              <span style={{ marginLeft: 8 }}>
                <Radio.Group value={this.state.ticketType || footerConfig.ticketType}>
                  <Radio value={1} disabled>已认证</Radio>
                  <Radio value={2} style={{ marginLeft: 0 }} disabled>未认证</Radio>
                </Radio.Group>
              </span>
              <span className={`${prefixCls}-footer-ticketDate`}>
                <span>认证日期:</span>
                <span className={`${prefixCls}-top-right-box-input`}>
                  <input className={`${prefixCls}-input ${prefixCls}-footer-input`} value={footerConfig.billDate || ''} disabled />
                  <Icon className={`${prefixCls}-top-right-box-calender`} type="calendar" />
                </span>                  
              </span>
            </div>
          )
          : (
            <div>
              <span>开票类型:</span>
              <span style={{ marginLeft: 8 }}>
                <Radio.Group value={this.state.ticketType || footerConfig.ticketType}>
                  <Radio value={1} disabled>代开发票</Radio>
                  <Radio value={2} style={{ marginLeft: 0 }} disabled>自开发票</Radio>
                </Radio.Group>
              </span>                
            </div>
          )
        }
      </div>
    )
  }
}

Footer.propTypes = {
  prefixCls: PropTypes.string,
}

Footer.defaultProps = {
  prefixCls: 'cr-tax',
}

export default Footer
