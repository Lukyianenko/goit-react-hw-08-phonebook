import { LabelFilt } from './BookContacts.styled';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { onFilter } from '../../redux/contactsSlice';
import { getStatusFilter } from "../../redux/selectors";

export const Filter = () => {
    const value = useSelector(getStatusFilter);
    const dispatch = useDispatch();

    return(
        <LabelFilt>
            Find contacts by name
            <input type="text" name='filtr' value={value} onChange={(e) => dispatch(onFilter(e.target.value))} />
        </LabelFilt>
    )
        
   }

