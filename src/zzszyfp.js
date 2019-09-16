import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OuiDom from './utils/ouiDomUtils';
import { Row, Col, Icon, Select, Radio } from 'antd';
import 'antd/dist/antd.css';

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
    const { prefixCls, taxHeader, taxPurchase, taxSales, taxDataList, ticketType } = this.props
    const dataTr = taxDataList.map((item, index) => {
      return (
        <tr className={`${prefixCls}-dataBox-data-dataTr`} key={index}>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.unit}</td>
          <td>{item.number}</td>
          <td>{item.price}</td>
          <td>{item.sum}</td>
          <td>
            {
              item.rate
              ? (
                  <Select defaultValue={item.rate} style={{ width: 80 }}>
                    <Option value={0.16}>0.16</Option>
                    <Option value={0.15}>0.15</Option>
                    <Option value={0.10}>0.10</Option>
                  </Select>
                )
              : (<div>&nbsp;</div>)
            }
          </td>
          <td className={`${prefixCls}-dataBox-data-SE-Data`}>{item.tax}</td>
        </tr>       
      )
    })
    return (
      <div className={`${prefixCls} ${prefixCls}-con`}>
        <div className={`${prefixCls}-main`}>
          <div className={`${prefixCls}-top`}>
            <Row>
              <Col span={8}>
                <div className={`${prefixCls}-top-left`}>
                  <div className={`${prefixCls}-top-left-box`}>
                    <span>*发票代码:</span>
                    <span className={`${prefixCls}-top-left-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.code} disabled />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-titleBox`}>
                  <div className={`${prefixCls}-top-titleBox-title`}>增值税专用发票</div>
                  <div className={`${prefixCls}-top-titleBox-line`}></div>
                  <div className={`${prefixCls}-top-titleBox-sub`}>发票联</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-right`}>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票号码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.number} disabled />
                    </span>
                  </div>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>开票日期:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.date} disabled />
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
                      <div style={{ marginTop: '-10px' }}>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-star`}>名</span>称
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxPurchase.name} disabled />
                          </span>
                        </div>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            纳税人识别号
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxPurchase.taxNumber} disabled />
                          </span>
                        </div>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            地址、电话
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxPurchase.addressPhone} disabled />
                          </span>
                        </div> 
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            开户行及账户
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxPurchase.bank} disabled />
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
            <div className={`${prefixCls}-dataBox-data ${prefixCls}-dataBox-interval`}>
              <table className={`${prefixCls}-dataBox-table`}>
                <thead>
                  <tr className={`${prefixCls}-dataBox-data-tr`}>
                    <th className={`${prefixCls}-dataBox-data-HW`}>*货物或应税劳务名称</th>
                    <th className={`${prefixCls}-dataBox-data-GG`}>规格型号</th>
                    <th className={`${prefixCls}-dataBox-data-DW`}>单位</th>
                    <th className={`${prefixCls}-dataBox-data-SL`}>数量</th>
                    <th className={`${prefixCls}-dataBox-data-DJ`}>单价</th>
                    <th className={`${prefixCls}-dataBox-data-JE`}>*金额</th>
                    <th className={`${prefixCls}-dataBox-data-SHL`}>*税率</th>
                    <th className={`${prefixCls}-dataBox-data-SE`}>税额</th>
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
                      {'价税合计(大写)'}
                    </td>
                    <td className={`${prefixCls}-dataBox-seller-HJB`}>
                      {taxSales.totalB}
                    </td>
                    <td className={`${prefixCls}-dataBox-seller-HJST ${prefixCls}-dataBox-center`}>
                    {'(小写)'}
                    </td>
                    <td className={`${prefixCls}-dataBox-seller-HJS`}>
                      {taxSales.totalS}
                    </td>
                  </tr>                       
                </tbody>              
              </table>
              <table className={`${prefixCls}-dataBox-table ${prefixCls}-dataBox-interval`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-dataBox-table-title`}>销货单位</td>
                    <td>
                      <div style={{ marginTop: '-10px' }}>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            <span className={`${prefixCls}-dataBox-table-cellBox-star`}>名</span>称
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxSales.name} disabled />
                          </span>
                        </div>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            纳税人识别号
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxSales.taxNumber} disabled />
                          </span>
                        </div>
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            地址、电话
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxSales.addressPhone} disabled />
                          </span>
                        </div> 
                        <div className={`${prefixCls}-dataBox-table-cellBox`}>
                          <span className={`${prefixCls}-dataBox-table-cellBox-title`}>
                            开户行及账户
                          </span>
                          <span>
                            <input className={`${prefixCls}-dataBox-input`} value={taxSales.bank} disabled />
                          </span>
                        </div>                                                                  
                      </div>                                                                                
                    </td>
                    <td className={`${prefixCls}-dataBox-table-title`}>备注</td>
                    <td className={`${prefixCls}-dataBox-table-BZ`}>{taxSales.remark}</td>
                  </tr> 
                </tbody>             
              </table>             
            </div>
          </div>
        </div>
        <div className={`${prefixCls}-footer`}>
          <span>开票类型:</span>
          <span style={{ marginLeft: 8 }}>
            <Radio.Group value={this.state.ticketType || ticketType} onChange={this.radioChange}>
              <Radio value={1}>代开发票</Radio>
              <Radio value={2} style={{ marginLeft: 0 }}>自开发票</Radio>
            </Radio.Group>
          </span>
        </div>
      </div>
    )
  }
}

export default Comp