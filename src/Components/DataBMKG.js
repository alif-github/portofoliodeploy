import React, { Component } from 'react';
import * as baseApi from '../Base API/baseApi';
import * as apiCollect from '../Base API/apiCollection';

const apiUrl = apiCollect.getApiInfoGempa()

class DataBMKG extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataLengkap: {
                Bujur:          null,
                Coordinates:    null,
                DateTime:       null,
                Dirasakan:      null,
                Jam:            null,
                Kedalaman:      null,
                Lintang:        null,
                Magnitude:      null,
                Potensi:        null,
                Shakemap:       null,
                Tanggal:        null,
                Wilayah:        null,
            }
         }
    }

    async componentDidMount() {
        let result = {ok: false, response: null}
        const response = await baseApi.doGet(apiUrl + "/autogempa.json")
        if (response) {
            result = {...result, ok: true, response}
        }
        this.setState({dataLengkap: result.response.data.Infogempa.gempa})
    }

    render() { 
        if (!this.props.data) return null;

        const state = this.state.dataLengkap

        return ( 
            <section id="databmkg">
                <div className="data-bmkg-layout">
                    <div className="column-databmkg col1-databmkg">
                        <div>
                            <div className="subcolumn sub-col1-databmkg">
                                <center>{state.Magnitude} Magnitudo</center>
                            </div>
                            <div className="subcolumn sub-col2-databmkg">
                                <center>{state.Wilayah}</center>
                            </div>
                        </div>
                    </div>
                    <div className="column-databmkg col2-databmkg">
                        <p>Sometext</p>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default DataBMKG;