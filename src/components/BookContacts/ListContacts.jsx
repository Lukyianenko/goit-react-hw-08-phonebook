import PropTypes from 'prop-types';
import { TitleContact, List, ContList, ButtonList, ItemList } from './BookContacts.styled';
import { getContacts } from "../../redux/selectors";
import { deleteContacts } from "../../redux/deleteContact";
import { useSelector, useDispatch } from "react-redux/es/exports";

export const ListContacts = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const filtr = useSelector(state => state.contact.filter);
    const normalizeFiltr = filtr.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFiltr));

    const onDelete = (id) => dispatch(deleteContacts(id));

    return (
    <ContList>
        <TitleContact>Contacts</TitleContact>
        <List>
        {visibleContacts.map(({ id, name, phone }) => (<ItemList key={id}>{name}: {phone} 
        <ButtonList type="button" onClick={() => onDelete(id)}>Delete</ButtonList>
        </ItemList>))}
        </List>
    </ContList>
    )
    
}

ListContacts.propTyoes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func,
}