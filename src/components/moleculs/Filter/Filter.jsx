import { FilterLabel,FilterInput } from "./Filter.styled"
import PropTypes from "prop-types"

export const Filter = ({value, onChange}) => {
    
        return(
            <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange}/>
            </>
        )
    }
 

export default Filter

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
