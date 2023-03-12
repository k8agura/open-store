import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {consultation} = useContext(Context)
    return (
            <ListGroup>
                {consultation.types.map(type =>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        active={type.id === consultation.selectedType.id}
                        onClick={() => consultation.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
    );
});

export default TypeBar;