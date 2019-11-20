import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { prefixCls, taxList=[], taxConfig={} } = this.props
    const dataTr = taxList.map((item, index) => {
      return (
        <tr key={index}>
          <td className={`${prefixCls}-tableBox-table-borderLeft`}>{item.name}</td>
          <td>{item.modelPrice}</td>
          <td>{item.modelCount}</td>
          <td className={`${prefixCls}-tableBox-table-borderRight`}>{item.sum}</td>
        </tr>
      )
    })
    return (
        <div className={`${prefixCls}`}>
          <div className={`${prefixCls}-container`}>
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-header-title`}>
                增值税普通发票(卷式)
              </div>
              <div className={`${prefixCls}-header-deco`}></div>
              <div>发票联</div>
            </div>
            <div className={`${prefixCls}-columBox`}>
              <div className={`${prefixCls}-columBox-colum`}>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    <span style={{color:'#FF3E2F'}}>*</span>发票代码
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.billCode} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    <span style={{color:'#FF3E2F'}}>*</span>发票号码
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.billNumber} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div> 
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    机打号码
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.machineNumber} disabled className={`${prefixCls}-columBox-cellBox-input2`} />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    <span style={{color:'#FF3E2F'}}>*</span>销售方名称
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.sellName} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div> 
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    纳税人识别号
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.sellTaxpayerNumber} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div> 
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    开票日期
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.billDate} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                    <Icon className={`${prefixCls}-columBox-cellBox-deco`} type="calendar" />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    购买方名称
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.buyName} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    纳税人识别号
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.buyTaxpayerNumber} disabled className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div>                                                                                                 
              </div>
              <div className={`${prefixCls}-columBox-colum ${prefixCls}-columBox-columPadding`}>
                <div className={`${prefixCls}-columBox-cellBox ${prefixCls}-columBox-cellTop`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    机器编码
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.machineId} disabled className={`${prefixCls}-columBox-cellBox-input2`} />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox ${prefixCls}-columBox-cellTop`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell1`}>
                    收款员
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.receivingTeller} disabled className={`${prefixCls}-columBox-cellBox-input2`} />
                  </div>
                </div>                                
              </div>
            </div>
            <div className={`${prefixCls}-tableBox`}>
              <table className={`${prefixCls}-tableBox-table`}>
                <tbody>
                  <tr className={`${prefixCls}-tableBox-table-trbg`}>
                    <th className={`${prefixCls}-tableBox-table-borderTop ${prefixCls}-tableBox-table-borderLeft`}>项目</th>
                    <th className={`${prefixCls}-tableBox-table-borderTop`}>单价</th>
                    <th className={`${prefixCls}-tableBox-table-borderTop`}>数量</th>
                    <th className={`${prefixCls}-tableBox-table-borderTop ${prefixCls}-tableBox-table-borderRight`}>金额</th>
                  </tr>
                  {dataTr}
                </tbody>
              </table>
              <div className={`${prefixCls}-tableBox-line`}></div>
            </div>
            <div className={`${prefixCls}-columBox`}>
              <div className={`${prefixCls}-columBox-colum`}>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell3`}>
                    合计金额(小写)
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.lowerSum} disabled className={`${prefixCls}-columBox-cellBox-input2`} />
                  </div>
                </div>
                <div className={`${prefixCls}-columBox-cellBox`}>
                  <div className={`${prefixCls}-columBox-cellBox-cell3`}>
                    合计金额(大写)
                  </div>
                  <div className={`${prefixCls}-columBox-cellBox-cell2`}>
                    <input value={taxConfig.upperSum} disabled className={`${prefixCls}-columBox-cellBox-input2`} />
                  </div>
                </div>
              </div>
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
  prefixCls: 'tax-ptfpjp',
}

export default App;