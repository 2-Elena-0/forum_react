import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {clearFilter, setValue} from "../../Redux/FilterSlice.ts";
import {useAppSelector} from "../../Redux/store.ts";

export const FindByName = () => {
    const filters = useAppSelector(state => state.filters.value);
    const dispatch = useDispatch();

    return (<>
        <Form.Control
            type="search"
            placeholder="Найти пост"
            aria-label="Search"
            className="me-1 collapse navbar-collapse justify-content-center d-flex"
            onChange={(e) => {
                dispatch(setValue(e.target.value))
            }}
            value={filters}
        />
        <Button onClick={() => dispatch(clearFilter())}>Очистить</Button>
    </>)
}