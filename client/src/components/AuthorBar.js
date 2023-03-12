import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const AuthorBar = observer(() => {
    const {consultation} = useContext(Context)
    return (
        <Row className={"d-flex"}>
            {consultation.author.map(author =>
                <Card
                    key={author.id}
                >
                    {author.name}
                </Card>
            )}
        </Row>
    );
});

export default AuthorBar;