import { ListItem, ContactListText, DeleteButton} from './ContactListItem.styled'
import PropTypes from "prop-types"

export const ContactListItem = ({name,number, onClick }) => {
    return (
        <ListItem>
            <ContactListText>{name} - {number}</ContactListText>
            <DeleteButton onClick={onClick}>Delete</DeleteButton>
        </ListItem>
    )
}

export default ContactListItem

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
