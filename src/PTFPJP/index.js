import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { prefixCls } = this.props

    return (
      <div>
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
                    <input className={`${prefixCls}-columBox-cellBox-input`} />
                  </div>
                </div>
              </div>
              <div className={`${prefixCls}-columBox-colum`}>2</div>
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