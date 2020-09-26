class Field extends React.Component{
    render(){
        const {name, value, onChange} = this.props
        return <div className="form-group">
            <label htmlFor={name}>le libellé</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log('render')
        return <div>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}/>
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))




