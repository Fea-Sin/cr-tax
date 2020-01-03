import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Select, Radio } from 'antd';
import 'antd/dist/antd.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Numeral from './utils/Numeral';

const { Option } = Select;

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      ticketType: null,
    }
  }

  radioChange = e => {
    this.setState({
      ticketType: e.target.value,
    })
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {
    const { prefixCls, taxDataList=[], ticketType, direction, taxConfig={} } = this.props
    const dataTr = taxDataList.map((item, index) => {
      return (
        <tr className={`${prefixCls}-dataBox-data-dataTr`} key={index}>
          <td className={`${prefixCls}-dataBox-data-dataTr-start`}>
            <span className={`${prefixCls}-dataBox-data-dataTr-text`}>{item.name}</span>
          </td>
          <td>{item.modelNumber}</td>
          <td>{item.modelUnit}</td>
          <td>{item.modelCount}</td>
          <td>{item.modelPrice}</td>
          <td>{item.price && Numeral(item.price).format('0,0.00')}</td>
          <td>
            {
              item.taxRate
              ? (<div>{item.taxRate}</div>)
              : (<div>&nbsp;</div>)
            }
          </td>
          <td className={`${prefixCls}-dataBox-data-dataTr-end`}>{item.billTaxValue && Numeral(item.billTaxValue).format('0,0.00')}</td>
        </tr>       
      )
    })
    return (
      <div className={`${prefixCls} ${prefixCls}-con-B`}>
        <Scrollbars style={{height: 675}}>
          <div className={`${prefixCls}-main`}>
            <div className={`${prefixCls}-top`}>
              <Row>
                <Col span={8}>
                  <div className={`${prefixCls}-top-left`}>
                    <div className={`${prefixCls}-top-left-box`}>
                      <span>*发票代码:</span>
                      <span className={`${prefixCls}-top-left-box-input`}>
                        <input className={`${prefixCls}-input`} value={taxConfig.billCode} disabled />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-titleBoxA`}>
                    <div className={`${prefixCls}-top-titleBoxA-title`}>增值税电子普通发票(通行费)</div>
                    <div className={`${prefixCls}-top-titleBoxA-line`}></div>
                    <div className={`${prefixCls}-top-titleBoxA-sub`}>发票联</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-top-right`}>
                    <div className={`${prefixCls}-top-right-box`}>
                      <span>发票号码:</span>
                      <span className={`${prefixCls}-top-right-box-input`}>
                        <input className={`${prefixCls}-input`} value={taxConfig.billNumber} disabled />
                      </span>
                    </div>
                    <div className={`${prefixCls}-top-right-box`}>
                      <span>开票日期:</span>
                      <span className={`${prefixCls}-top-right-box-input`}>
                        <input className={`${prefixCls}-input`} value={taxConfig.billDate} disabled />
                        <Icon className={`${prefixCls}-top-right-box-calender`} type="calendar" />
                      </span>
                    </div>               
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${prefixCls}-dataBox`}>
              <div className={`${prefixCls}-dataBox-purchaser`}>
                <table className={`${prefixCls}-dataBox-table`}>
                  <tbody>
                    <tr>
                      <td className={`${prefixCls}-dataBox-table-title`}>购货单位</td>
                      <td>
                        <div style={{ marginTop: '5px' }}>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              <span className={`${prefixCls}-dataBox-table-cellBox-star`}>名</span>称
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.buyCompanyName} disabled />
                            </span>
                          </div>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              纳税人识别号
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.buyTaxpayerNumber} disabled />
                            </span>
                          </div>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              地址、电话
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.buyCompanyAddrAphone} disabled />
                            </span>
                          </div> 
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              开户行及账户
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input ${prefixCls}-dataBox-noLine`} value={taxConfig.buyCompanyBankNumber} disabled />
                            </span>
                          </div>                                                                  
                        </div>                                                                                
                      </td>
                      <td className={`${prefixCls}-dataBox-table-title`}>密码区</td>
                      <td className={`${prefixCls}-dataBox-table-blank`}></td>
                    </tr>   
                  </tbody>           
                </table>
              </div>
              <div className={`${prefixCls}-dataBox-data ${prefixCls}-dataBox-interval ${prefixCls}-dataBox-data-innerTable`}>
                <table className={`${prefixCls}-dataBox-table`}>
                  <thead>
                    <tr className={`${prefixCls}-dataBox-data-tr`}>
                      <th className={`${prefixCls}-dataBox-data-HW ${prefixCls}-dataBox-data-tr-start`}>*项目名称</th>
                      <th className={`${prefixCls}-dataBox-data-GG`}>车牌号</th>
                      <th className={`${prefixCls}-dataBox-data-DW`}>类型</th>
                      <th className={`${prefixCls}-dataBox-data-SL`}>通行日期起</th>
                      <th className={`${prefixCls}-dataBox-data-DJ`}>通行日期止</th>
                      <th className={`${prefixCls}-dataBox-data-JE`}>金额</th>
                      <th className={`${prefixCls}-dataBox-data-SHL`}>税率</th>
                      <th className={`${prefixCls}-dataBox-data-SE ${prefixCls}-dataBox-data-tr-end`}>税额</th>
                    </tr>
                  </thead>
                  <tbody>
                    { dataTr }
                  </tbody>
                </table>
              </div>
              <div className={`${prefixCls}-dataBox-seller`}>
                <table className={`${prefixCls}-dataBox-table ${prefixCls}-dataBox-interval`}>
                  <tbody>
                    <tr className={`${prefixCls}-dataBox-seller-tr`}>
                      <td className={`${prefixCls}-dataBox-seller-HJBT ${prefixCls}-dataBox-center`}>
                        <span>价税合计</span>
                        <span style={{fontSize: 13}}>（大写）</span>
                      </td>
                      <td className={`${prefixCls}-dataBox-seller-HJB`}>
                        {taxConfig.billTaxPriceUpper}
                      </td>
                      <td className={`${prefixCls}-dataBox-seller-HJST ${prefixCls}-dataBox-center`}>
                        <span style={{fontSize: 13}}>（小写）</span>
                      </td>
                      <td className={`${prefixCls}-dataBox-seller-HJS`}>
                        {`¥${taxConfig.billTaxPriceLower && Numeral(taxConfig.billTaxPriceLower).format('0,0.00')}`}
                      </td>
                    </tr>                       
                  </tbody>              
                </table>
                <table className={`${prefixCls}-dataBox-table ${prefixCls}-dataBox-interval`}>
                  <tbody>
                    <tr>
                      <td className={`${prefixCls}-dataBox-table-title`}>销货单位</td>
                      <td>
                        <div style={{ marginTop: '5px' }}>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              <span className={`${prefixCls}-dataBox-table-cellBox-star`}>名</span>称
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.sellCompanyName} disabled />
                            </span>
                          </div>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              纳税人识别号
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.sellTaxpayerNumber} disabled />
                            </span>
                          </div>
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              地址、电话
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input`} value={taxConfig.sellCompanyAddrPhone} disabled />
                            </span>
                          </div> 
                          <div className={`${prefixCls}-dataBox-table-cellBox`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                              开户行及账户
                            </span>
                            <span>
                              <input className={`${prefixCls}-dataBox-input ${prefixCls}-dataBox-noLine`} value={taxConfig.sellCompanyBankNumber} disabled />
                            </span>
                          </div>                                                                  
                        </div>                                                                                
                      </td>
                      <td className={`${prefixCls}-dataBox-table-title`}>备注</td>
                      <td className={`${prefixCls}-dataBox-table-BZ`}>
                        <div className={`${prefixCls}-text`}>
                          {taxConfig.remark}
                        </div>
                      </td>
                    </tr> 
                  </tbody>             
                </table>             
              </div>
            </div>
          </div>
        </Scrollbars>
        <div className={`${prefixCls}-footer`}>
        {
            direction === 'in'
            ? (
              <div>
                <span>认证状态:</span>
                <span style={{ marginLeft: 8 }}>
                  <Radio.Group value={this.state.ticketType || ticketType} onChange={this.radioChange}>
                    <Radio value={1} disabled>已认证</Radio>
                    <Radio value={2} style={{ marginLeft: 0 }} disabled>未认证</Radio>
                  </Radio.Group>
                </span>
                <span className={`${prefixCls}-footer-ticketDate`}>
                  <span>认证日期:</span>
                  <span className={`${prefixCls}-top-right-box-input`}>
                    <input className={`${prefixCls}-input ${prefixCls}-footer-input`} value={taxConfig.billDate || ''} disabled />
                    <Icon className={`${prefixCls}-top-right-box-calender`} type="calendar" />
                  </span>                  
                </span>
              </div>
            )
            : (
              <div>
                <span>开票类型:</span>
                <span style={{ marginLeft: 8 }}>
                  <Radio.Group value={this.state.ticketType || ticketType} onChange={this.radioChange}>
                    <Radio value={1} disabled>代开发票</Radio>
                    <Radio value={2} style={{ marginLeft: 0 }} disabled>自开发票</Radio>
                  </Radio.Group>
                </span>                
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Comp
