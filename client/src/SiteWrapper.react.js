// @flow

import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";
import './SiteWrapper.react.css'
import { Site } from "tabler-react";

type Props = {|
    +children: React.Node,
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

const navBarItems: Array<navItem> = [
    {
        value: "Economia",
        subItems: [
            {
                value: "PIB",
                to: { pathname: "/economia/pib-nominal", state: { title: 'PIB' } },
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Renda per capta",
                to: { pathname: "/economia/renda-per-capta", state:{ title: 'Renda per capta' } },
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Risco de investimento",
                to: "/economia/risco-de-investimento",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Inflação",
                to: "/economia/inflacao",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Dívida pública",
                to: "/economia/divida-publica",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Dívida externa",
                to: "/economia/dívida-externa",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Taxa de Desemprego",
                to: "/economia/taxa-desemprego",
                LinkComponent: withRouter(NavLink),
            },
        ],
    },
    {
        value: "Segurança Pública",
        subItems: [
            {
                value: "Homicídios per capta",
                to: "/seguranca/homicidios-per-capta",
                LinkComponent: withRouter(NavLink),
            },
        ],
    },
    {
        value: "Educação",
        subItems: [
            {
                value: "Escolaridade",
                to: "/escolaridade",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Alfabetização",
                to: "/alfabetizacao",
                LinkComponent: withRouter(NavLink),
            },
            {
                value: "Distorção de idade/série",
                to: "/distorcao-idade-serie",
                LinkComponent: withRouter(NavLink),
            },
        ],
    },
    {
        value: "Moradia",
        subItems: [
            {value: "Brasileiros sem teto", to: "/sem-teto", LinkComponent: withRouter(NavLink)},
            {value: "Brasiliros sem terra", to: "/sem-terra", LinkComponent: withRouter(NavLink)},
            {value: "Casas com saneamento básico", to: "/saneamento-basico", LinkComponent: withRouter(NavLink)},
            {value: "Energia Elétrica", to: "/energia-eletrica", LinkComponent: withRouter(NavLink)},
        ],
    },
    {
        value: "Corrupção",
        subItems: [
            {value: "Índice de percepção da corrupção", to: "/indice-percepcao-corrupcao", LinkComponent: withRouter(NavLink)},
        ],
    },
    {
        value: "Social",
        subItems: [
            {value: "IDH", to: "/idh", LinkComponent: withRouter(NavLink)},
            {value: "Índice de Gini", to: "/indice-gini", LinkComponent: withRouter(NavLink)},
        ],
    },
];

class SiteWrapper extends React.Component<Props, void> {
    render(): React.Node {
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
