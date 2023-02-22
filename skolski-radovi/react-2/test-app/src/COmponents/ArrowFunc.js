import PropTypes from "prop-types"

const ArrowFunc = ({pozdrav}) => {
    return (
        <p>{pozdrav} iz arrow funkcije</p>
    )
}

export default ArrowFunc;

ArrowFunc.defaultProps = {
    pozdrav: "dobar dan"
}

ArrowFunc.propTypes = {
    pozdrav: PropTypes.string
}