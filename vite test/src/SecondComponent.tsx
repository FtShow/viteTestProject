import React from 'react';

export class SecondComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <span style={{ fontSize: "20px" }}>{JSON.stringify(this.props.value)}</span>;
    }
}
