import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.data,
            currentField: "name",
            currentFieldValue: this.props.data.name.first + " " + this.props.data.name.last
        };
    }
    handleClick = (field) => {
        let value = this.getFieldValue(field);
        this.setState({
            currentField: field,
            currentFieldValue: value
        });
        
    }

    getFieldValue(field) {
        let data = this.props.data;
        switch(field) {
            case 'age' : return data.dob.age;
            case 'phone': return data.phone;
            case 'name': return data.name.first + " " + data.name.last;
            case 'email': return data.email;
            case 'street': return data.location.street.name;            
            case 'password': return 'humpy';
            default: return '';
        }
    }
    render() {        
        let user = this.state.currentUser;
        let field = this.state.currentField;
        let value = this.state.currentFieldValue;       
        
        return (
            <div className="card">            
            <div className="profile-image">
            <img src={user.picture.medium} alt="profile"/>
            </div>            
                <div className="description">
                    <h4>{`My ${field} is`}</h4>
                    <h2>{value}</h2>
                </div>
                <div className="icon-links flex">
            <div className="icon">
            <FontAwesomeIcon icon={solid('user')} onClick={() => this.handleClick('name',)}/>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={solid('envelope-open')} onClick={() => this.handleClick('email')}/>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={solid('calendar-xmark')} onClick={() => this.handleClick('age')}/>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={solid('map')} onClick={() => this.handleClick('street')}/>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={solid('phone')} onClick={() => this.handleClick('phone')}/>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={solid('lock')} onClick={() => this.handleClick('password')}/>
            </div>
            </div>
            <button onClick={this.props.changeProfile}>{user ? "RANDOM USER" : "Loading..."}</button>
            </div>
        );
    }
}

export default UserCard;
