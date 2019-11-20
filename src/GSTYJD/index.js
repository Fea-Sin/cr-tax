import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, Row, Col } from 'antd';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { prefixCls, taxList=[], taxConfig={} } = this.props

    return (
        <div className={`${prefixCls}`}>
          <div className={`${prefixCls}-container`}>
            <div className={`${prefixCls}-header`}>
              <Row>
                <Col span={8}>
                  <div className={`${prefixCls}-header-left`}>
                    <div className={`${prefixCls}-header-left-cellBox`}>
                      <div className={`${prefixCls}-header-cell`}>
                        <span className={`${prefixCls}-header-cell-title`}>
                          发票代码：
                        </span>
                        <span className={`${prefixCls}-header-cell-span`}>
                          <input className={`${prefixCls}-header-cell-input`} />
                          <Icon className={`${prefixCls}-header-left-deco`} type="calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-middle`}>
                    <div className={`${prefixCls}-header-middle-con`}>
                      <div className={`${prefixCls}-header-middle-title`}>国税通用机打发票</div>
                      <div className={`${prefixCls}-header-middle-deco`}></div>
                      <div className={`${prefixCls}-header-middle-text`}>发票联</div>
                    </div>
                    <div className={`${prefixCls}-header-middle-cellBox`}>
                      <div className={`${prefixCls}-header-middle-cellBox-cell`}>
                        <span className={`${prefixCls}-header-cell-title`}>行业分类：</span>
                        <span className={`${prefixCls}-header-cell-span`}>
                          <input className={`${prefixCls}-header-cell-input`} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className={`${prefixCls}-header-right`}>
                    <div className={`${prefixCls}-header-right-cellBox`}>
                      <div className={`${prefixCls}-header-cell`}>
                        <span className={`${prefixCls}-header-cell-title`}>
                          <span style={{color: 'red'}}>*</span>
                          发票代码：
                        </span>
                        <span className={`${prefixCls}-header-cell-span`}>
                          <input className={`${prefixCls}-header-cell-input`} />
                        </span>
                      </div>
                      <div className={`${prefixCls}-header-cell`}>
                        <span className={`${prefixCls}-header-cell-title`}>
                          <span style={{color: 'red'}}>*</span>
                          发票号码：
                        </span>
                        <span className={`${prefixCls}-header-cell-span`}>
                          <input className={`${prefixCls}-header-cell-input`} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${prefixCls}-tableBox`}>
              <table className={`${prefixCls}-table ${prefixCls}-tableBox-tableA`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>机打代码</span>
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputA`} />
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-three`}>
                      <span className={`${prefixCls}-tableBox-title`}>机器编码</span>
                    </td>
                    <td>
                      <input className={`${prefixCls}-tableBox-inputB`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>机打号码</span>
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputA`} />
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-three`}>
                      <span className={`${prefixCls}-tableBox-title`}>税控码</span>
                    </td>
                    <td>
                      <input className={`${prefixCls}-tableBox-inputA`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>
                        <span style={{color: 'red'}}>*</span>
                        付款单位
                      </span>
                    </td>
                    <td colSpan='3' className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputB`} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className={`${prefixCls}-table ${prefixCls}-tableBox-tableB ${prefixCls}-tableBox-line`}>
                <tbody>
                  <tr>
                    <th className={`${prefixCls}-tableBox-tableB-XM`}>
                      <span style={{color: 'red'}}>*</span>
                      项目/名称
                    </th>
                    <th className={`${prefixCls}-tableBox-tableB-GG`}>规格</th>
                    <th className={`${prefixCls}-tableBox-tableB-DW`}>单位</th>
                    <th className={`${prefixCls}-tableBox-tableB-SL`}>数量</th>
                    <th className={`${prefixCls}-tableBox-tableB-DJ`}>单价</th>
                    <th>
                      <span style={{color: 'red'}}>*</span>
                      金额
                    </th>                    
                  </tr>
                  <tr>
                    <td>名称</td>
                    <td>001</td>
                    <td>个</td>
                    <td>100</td>
                    <td>56.00</td>
                    <td>5,600.00</td>
                  </tr>
                </tbody>
              </table>
              <table className={`${prefixCls}-table ${prefixCls}-tableBox-tableA ${prefixCls}-tableBox-line`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>大写金额</span>
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputA`} />
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-three`}>
                      <span className={`${prefixCls}-tableBox-title`}>小写金额</span>
                    </td>
                    <td>
                      <input className={`${prefixCls}-tableBox-inputA`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>
                        <span style={{color: 'red'}}>*</span>
                        收款单位
                      </span>
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputB`} />
                    </td>
                    <td className={`${prefixCls}-tableBox-tableA-three`}>
                      <span className={`${prefixCls}-tableBox-title`}>收款单位税号</span>
                    </td>
                    <td>
                      <input className={`${prefixCls}-tableBox-inputB`} />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-tableBox-tableA-one`}>
                      <span className={`${prefixCls}-tableBox-title`}>
                        备注
                      </span>
                    </td>
                    <td colSpan='3' className={`${prefixCls}-tableBox-tableA-two`}>
                      <input className={`${prefixCls}-tableBox-inputB`} />
                    </td>
                  </tr>
                </tbody>
              </table>              
            </div>
          </div>
        </div>
    )
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'tax-gstyjd',
}

export default App;