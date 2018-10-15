import React from 'react';
import ReactDOM from 'react-dom';
import Summer from '../../assets/js/summer';
import './index.css';

export default class Index extends Comment {
  constructor(props) {
    super(props);
    this.state = {
      permssions: ["android.permission.CAMERA",
        "android.permission.READ_PHONE_STATE",
        "android.permission.WRITE_EXTERNAL_STORAGE"]
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentWillReceiveProps(nextProps){

  };


  componentDidMount() {
    summer.getPermission(params, function (args) {
      alert(args); //成功返回OK
    }, function (args) {
      alert(args); //失败返回illegal access
    })
  };

  componentWillMount() {

  };

  render() {
    return (
      <div>
        <h1>呵呵哒</h1>
      </div>
    )
  };


}
ReactDOM.render(<Index />,
  document.querySelector("#app"));

