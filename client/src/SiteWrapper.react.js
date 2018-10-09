// @flow

import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";
import './SiteWrapper.react.css'
import { Site } from "tabler-react";

type Props = {|
    +children: React.Node,
    +categories: any[]
|};

type subNavItem = {|
    +value: string,
    +to?: string,
    +icon?: string,
    +LinkComponent?: React.ElementType,
|};

type navItem = {|
    +value: string,
    +to?: string,
    +icon?: string,
    +active?: boolean,
    +LinkComponent?: React.ElementType,
    +subItems?: Array<subNavItem>,
|};

class SiteWrapper extends React.Component<Props, void> {
    render(): React.Node {
        const navBarItems: Array<navItem> = this.props.categories.map((category) => ({
            value: category.title,
            subItems: category.statistics.map((statistic) => ({
                value: statistic.shortTitle,
                to: { pathname: `/${category.slug}/${statistic.slug}`, state: { title: statistic.shortTitle }},
                LinkComponent: withRouter(NavLink)
            })),
        }))
        return (
            <Site.Wrapper
                headerProps={{
                    href: "/",
                    alt: "Brasil em Dados",
                    imageURL: "/logo.png",
                    navItems: (
                        <div className="d-none d-md-flex navbar-statement">
                            Dados do país antes e depois dos governos do PT
                        </div>
                    )
                }}
                navProps={{itemsObjects: navBarItems}}
                footerProps={{
                    copyright: (
                        <React.Fragment>
                            Copyleft <span className="copyleft">&copy;</span> 2018 | &nbsp;
                            <strong>Toda</strong> pessoa é bem-vinda para colaborar com essa plataforma. Confira o código fonte <a href="https://github.com/lucasmafra/brasil-em-dados">aqui</a> ou <a href="mailto:lucas.mafra95@gmail.com?Subject=Brasil%20Em%20Dados">mande um e-mail</a> com sugestões.
                        </React.Fragment>
                    ),
                }}
            >
                {this.props.children}
            </Site.Wrapper>
        );
    }
}

export default SiteWrapper;
