// @flow

import * as React from "react";
import {Page, Grid, Card, colors, Dimmer} from "tabler-react";
import C3Chart from "react-c3js";
import SiteWrapper from "../SiteWrapper.react";
import './ChartsPage.react.css'

class ChartsPage extends React.Component {
    state = {
        fetchingData: true,
        statistic: undefined,
        title: ''
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.category !== this.props.match.params.category || prevProps.match.params.statistic !== this.props.match.params.statistic) {
            this.onRouteChange()
        }
    }

    componentDidMount = () => {
        this.onRouteChange()
    }

    onRouteChange = () => {
        this.setState({ fetchingData: true, title: this.props.location.state && this.props.location.state.title, statistic: undefined })
        setTimeout(() => {
            this.setState({fetchingData: false})
        }, 1000)
    }

    render = () => {
        const chart = {
            title: "PIB - Produto Interno Bruto",
            data: {
                columns: [
                    // each columns data
                    ["data1", 2, 8, 6, 7, 14, 11],
                    ["data2", 5, 15, 11, 15, 21, 25],
                    ["data3", 17, 18, 21, 20, 30, 29],
                ],
                type: "line", // default type of chart
                colors: {
                    data1: colors.orange,
                    data2: colors.blue,
                    data3: colors.green,
                },
                names: {
                    // name of each serie
                    data1: "PSDB",
                    data2: "PT",
                    data3: "PMDB",
                },
            },
            axis: {
                x: {
                    type: "category",
                    // name of each category
                    categories: ["2013", "2014", "2015", "2016", "2017", "2018"],
                },
            },
        }

        return (
            <SiteWrapper>
                <Page.Content>
                    <Grid.Row>
                        <Grid.Col xl={8} lg={8}>
                            <Card title={this.state.statistic ? this.state.statistic.title : this.state.title }>
                                <Card.Body>
                                    {
                                        this.state.fetchingData && (
                                            <Dimmer active loader>
                                                <C3Chart
                                                    data={chart.data}
                                                    axis={chart.axis}
                                                    legend={{
                                                        show: true, //hide legend
                                                    }}
                                                    padding={{
                                                        bottom: 0,
                                                        top: 0,
                                                    }}
                                                />
                                            </Dimmer>
                                        )
                                    }
                                    {
                                        !this.state.fetchingData && (
                                            <C3Chart
                                                data={chart.data}
                                                axis={chart.axis}
                                                legend={{
                                                    show: true, //hide legend
                                                }}
                                                padding={{
                                                    bottom: 0,
                                                    top: 0,
                                                }}
                                            />
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                        <Grid.Col>
                            <Card title={'Informações'}>
                                <Card.Body>
                                    {
                                        this.state.fetchingData && (
                                            <Dimmer active loader>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Aperiam deleniti fugit incidunt,
                                                iste, itaque minima neque
                                                pariatur perferendis sed
                                                suscipit velit vitae voluptatem.
                                                A
                                                consequuntur, deserunt eaque
                                                error nulla temporibus!
                                            </Dimmer>
                                        )
                                    }
                                    {
                                        !this.state.fetchingData && (
                                            <div>
                                                <Grid.Row>
                                                    <p>
                                                        <strong>Estatística: </strong>Produto
                                                        Interno Bruto (PIB)
                                                        nominal</p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p className="statistic-comment">
                                                        <strong>Comentário: </strong>Produto
                                                        Interno Bruto (PIB) em
                                                        valores correntes. As
                                                        informações sobre as
                                                        séries do Sistema de
                                                        Contas Nacionais -
                                                        referência 2010 estão em
                                                        conformidade com o novo
                                                        manual System of
                                                        National Accounts (SNA)
                                                        de 2008, da Organização
                                                        das Nações Unidas (ONU),
                                                        que inclui, entre outras
                                                        mudanças metodológicas,
                                                        a nova classificação de
                                                        produtos e atividades
                                                        integrada com a
                                                        Classificação Nacional
                                                        de Atividades Econômicas
                                                        - CNAE 2.0.</p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p>
                                                        <strong>Fonte:</strong>&nbsp;
                                                        <a href="http://www.ipeadata.gov.br/ExibeSerie.aspx?serid=38415"> IPEA</a>
                                                    </p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p><strong>Dados
                                                        brutos:</strong>&nbsp;
                                                        <a href="https://s3.amazonaws.com/brasil-em-dados/economia/PIB-nominal.csv">https://s3.amazonaws.com/brasil-em-dados/economia/PIB-nominal.csv</a>
                                                    </p>
                                                </Grid.Row>
                                            </div>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Page.Content>
            </SiteWrapper>
        );
    }
}

export default ChartsPage;
