function BoilingVerdict({celsius}) {
    if (celsius >= 100){
        return <div className="alert alert-success">l'eau bout</div>
    }
    return <div className="alert alert-info">l'eau ne bout pas</div>
}

ReactDOM.render(<BoilingVerdict celsius={100}/>, document.getElementById('app'))
