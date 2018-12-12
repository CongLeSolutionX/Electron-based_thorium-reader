// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import * as React from "react";

import * as styles from "readium-desktop/renderer/assets/styles/header.css";

interface Props {
    style?: {};
    id?: string;
}

export default class SecondaryHeader extends React.Component<Props, undefined> {
    public render(): React.ReactElement<{}> {
        const { id } = this.props;
        return (
            <nav
                style={this.props.style}
                className={styles.nav_secondary}
                role="navigation"
                aria-label="Menu principal"
                {...(id ? {id} : {})}
            >
                {this.props.children}
            </nav>
        );
    }
}
