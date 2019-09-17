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
    return (
      <div className={`${prefixCls} ${prefixCls}-con-C`}>
        <div className={`${prefixCls}-main`}>
          <div className={`${prefixCls}-top`}>
            <Row>
              <Col span={8}>
                <div className={`${prefixCls}-top-left`}>
                  <div className={`${prefixCls}-top-left-box`}>
                    <span>*开票日期:</span>
                    <span className={`${prefixCls}-top-left-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.date} disabled />
                      <Icon className={`${prefixCls}-top-right-box-calender`} type="calendar" />
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-titleBox`}>
                  <div className={`${prefixCls}-top-titleBox-title`}>机动车销售统一发票</div>
                  <div className={`${prefixCls}-top-titleBox-line`}></div>
                  <div className={`${prefixCls}-top-titleBox-sub`}>发票联</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={`${prefixCls}-top-right`}>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票代码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.code} disabled />
                    </span>
                  </div>
                  <div className={`${prefixCls}-top-right-box`}>
                    <span>发票号码:</span>
                    <span className={`${prefixCls}-top-right-box-input`}>
                      <input className={`${prefixCls}-input`} value={taxHeader.number} disabled />
                      <Icon className={`${prefixCls}-top-right-box-calender`} type="calendar" />
                    </span>
                  </div>               
                </div>
              </Col>
            </Row>
          </div>
          <div className={`${prefixCls}-dataBox`}>
            <div className={`${prefixCls}-dataBox-dataA`}>
              <table className={`${prefixCls}-dataBox-table`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-dataBox-table-titleB`}>
                      <div className={`${prefixCls}-dataBox-dataA-title`}>机打代码</div>
                      <div className={`${prefixCls}-dataBox-dataA-title`}>机打号码</div>
                      <div className={`${prefixCls}-dataBox-dataA-title ${prefixCls}-dataBox-dataA-title-last`}>机器编码</div>
                    </td>
                    <td>
                      <div className={`${prefixCls}-dataBox-dataA-text`}>
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={'143787097090790'} disabled />
                      </div>  
                      <div className={`${prefixCls}-dataBox-dataA-text`}>
                        <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={'000989384'} disabled />
                      </div>  
                      <div className={`${prefixCls}-dataBox-dataA-text ${prefixCls}-dataBox-dataA-text-last`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={'4783695870'} disabled />
                      </div>                                                                                                    
                    </td>
                    <td className={`${prefixCls}-dataBox-table-title`}>税控码</td>
                    <td className={`${prefixCls}-dataBox-table-blank`}></td>
                  </tr>   
                </tbody>           
              </table>
            </div>
            <div className={`${prefixCls}-dataBox-dataB ${prefixCls}-dataBox-interval`}>
              <table className={`${prefixCls}-dataBox-table`}>
                <tbody>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleA`}>
                      *购买方名称及身份证号码/组织机构代码
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={'南京智慧科技有限公司'} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleB`}>
                      纳税人识别号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={'23423543546'} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      车辆类型
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={'轿车'} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      厂牌型号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={'梅赛德斯奔驰s600'} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      *产地
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={'德国'} disabled />
                    </td>
                  </tr> 
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      合格证号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      进口证明书号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      商检单号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      发动机号码
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      车牌识别号/车架号码
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      价税合计（大写）
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      *小写
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input ${prefixCls}-dataBox-dataA-input-disable`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      *销货单位名称
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      电话
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      纳税人识别号
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      账号
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      地址
                    </td>
                    <td colSpan='3'>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      开户银行
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      *增值税税率或征收率
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      *增值税税额
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-four`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-five ${prefixCls}-dataBox-dataB-titleC`}>
                      主管税务机关及代码
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                  </tr>
                  <tr>
                    <td className={`${prefixCls}-dataBox-dataB-td-one ${prefixCls}-dataBox-dataB-titleC`}>
                      *不含税价
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-two`}>
                      <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-three ${prefixCls}-dataBox-dataB-titleC`}>
                      完税凭证号码
                    </td>
                    <td colSpan='2'>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellA`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                      </div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellB`}>吨位</div>
                    </td>
                    <td className={`${prefixCls}-dataBox-dataB-td-six`}>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC ${prefixCls}-dataBox-dataB-cellC-border`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                      </div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC ${prefixCls}-dataBox-dataB-cellC-border`}>限乘人数</div>
                      <div className={`${prefixCls}-dataBox-dataB-cell ${prefixCls}-dataBox-dataB-cellC`}>
                        <input className={`${prefixCls}-dataBox-dataA-input`} value={''} disabled />
                      </div>
                    </td>
                  </tr>                                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp