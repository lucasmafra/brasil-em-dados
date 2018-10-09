// @flow

import * as React from "react";
import {Page, Grid, Card, colors, Dimmer} from "tabler-react";
import C3Chart from "react-c3js";
import SiteWrapper from "../SiteWrapper.react";
import './ChartsPage.react.css'
import {client} from "../repository/repository";
import {STATISTIC} from "../repository/queries";
import * as d3 from "d3";

const mapColors = {
    PT: 'red',
    PSDB: 'blue',
    PMDB: 'green'
}

class ChartsPage extends React.Component {
    state = {
        fetchingData: true,
        statistic: undefined,
        title: ''
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.category !== this.props.match.params.category || prevProps.match.params.statistic !== this.props.match.params.statistic) {
            this.onRouteChange(this.props.match.params.statistic)
        }
    }

    componentDidMount = () => {
        this.onRouteChange(this.props.match.params.statistic)
    }

    onRouteChange = async (slug) => {
        this.setState({
            fetchingData: true,
            title: this.props.location.state && this.props.location.state.title,
            statistic: undefined
        })
        const {data: {statistic}} = await client.query({
            query: STATISTIC,
            variables: {slug}
        })
        this.setState({fetchingData: false, statistic})
        d3.select('.c3').insert('div').attr('class', 'legend')
            .style('display', 'flex')
            .style('justify-content', 'center')
            .style('margin-bottom', '20px')
            .style('margin-top', '-10px')
            .append('span')
            .style('font-weight', 600)
            .html(() => 'Governo vigente')
    }

    render = () => {
        let chart
        const {statistic} = this.state
        if (statistic) {
            chart = {
                title: statistic.shortTitle,
                data: {
                    xs: {
                        data1: 'x1',
                        data2: 'x2',
                        data3: 'x3',
                    },
                    columns: [
                        ['x1', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01'],
                        ['x2', '2013-06-01', '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01'],
                        ['x3', '2013-11-01', '2013-12-01', '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01'],
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 250, 340, 200, 500, 250, 350],
                        ['data3', 350, 500, 450, 700, 600, 500]
                    ],
                    names: {
                        data1: 'PSDB',
                        data2: 'PT',
                        data3: 'PMDB'
                    },
                    colors: {
                        data1: 'blue',
                        data2: 'red',
                        data3: 'green'
                    }
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%m/%Y'
                        }
                    },
                    y: {
                        label: {
                            text: 'Produto Interno Bruto (R$ milhões)',
                            position: 'outer-middle',
                        }
                    }
                },
                grid: {
                    x: {
                        lines: [
                            {
                                value: '2013-06-01',
                                text: 'Início do governo Dilma',
                                class: 'label-5'
                            },
                            {
                                value: '2013-11-01',
                                text: 'Início do governo Temer',
                                class: 'label-5'
                            },
                        ]
                    }
                }
            }
        } else {
            chart = {
                title: 'PIB',
                data: {
                    columns: [// each columns data
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
        }
        return (
            <SiteWrapper categories={this.props.categories}>
                <Page.Content>
                    <Grid.Row>
                        <Grid.Col xl={8} lg={8}>
                            <Card
                                title={this.state.statistic ? this.state.statistic.title : this.state.title}>
                                <Card.Body>
                                    {
                                        this.state.fetchingData && (
                                            <Dimmer active loader>
                                                <C3Chart
                                                    data={chart.data}
                                                    axis={chart.axis}
                                                    grid={chart.grid}
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
                                                grid={chart.grid}
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
                        <Grid.Col xl={4} lg={4}>
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
                                                        <strong>Estatística: </strong>
                                                        {this.state.statistic.title}
                                                    </p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p className="statistic-comment">
                                                        <strong>Comentário: </strong>
                                                        {this.state.statistic.description}
                                                    </p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p>
                                                        <strong>Fonte:</strong>&nbsp;
                                                        <a href={this.state.statistic.source}>IPEA</a>
                                                    </p>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <p><strong>Download:</strong>&nbsp;
                                                        <a href={this.state.statistic.dataURL}>Clique aqui</a>
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
