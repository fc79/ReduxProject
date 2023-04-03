import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div className="detail">.برای مشاهدهٔ اطلاعات بیشتر روی اسم کلیک کنید</div>);
        }
        return (
            <div class="card exclusivecard" style={{backgroundColor:'skyblue'}}>
           <div class="card-body">
           <p class="card-text text-center text">
           <img src={this.props.user.image} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>کد: {this.props.user.code}</h3>
                <h3>کلاس: {this.props.user.class}</h3>
                <h3>غیبت‌ها: {this.props.user.absence}  </h3>

          </p>
      </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.activeUser    };
}

export default connect(mapStateToProps)(UserDetail);