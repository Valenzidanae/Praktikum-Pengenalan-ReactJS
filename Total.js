import React from 'react';
import './Total.css';

class Total extends React.Component {
    constructor() {
        super();
        this.state = {
            harga_awal: 0,
            ppn: 0,
            diskon: 0,
            hasil: 0
        }
    }

    harga_awal = (event) => {
        this.setState({ harga_awal: event.target.value });
    }

    ppn = (event) => {
        this.setState({ ppn: event.target.value });
    }

    diskon = (event) => {
        this.setState({ diskon: event.target.value });
    }

    proses = () => {
        let harga_awal = Number(this.state.harga_awal)
        let ppn = Number(this.state.ppn)
        let diskon = Number(this.state.diskon)
        let ppn_proses = (ppn / 100) * harga_awal
        let diskon_proses = (diskon / 100) * harga_awal
        let harga_akhir = (harga_awal * 1 + ppn_proses) - diskon_proses
        console.log(harga_awal)
        console.log(ppn_proses)
        console.log(diskon_proses)
        this.setState({ hasil: harga_akhir })
    }

    render() {
        return (
            <center>
                <div className="layer1">
                    <div className="layer_atas">
                        <h6>Hitung Harga Akhir</h6>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label>Harga Awal</label>
                                    <input name="harga_awal" class="form-control" value={this.state.harga_awal} onChange={ev => this.setState({ harga_awal: ev.target.value })} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>PPN</label>
                                <div class="input-group mb-3">
                                    <input name="ppn" class="form-control" value={this.state.ppn} onChange={ev => this.setState({ ppn: ev.target.value })} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Diskon</label>
                                <div class="input-group mb-3">
                                    <input name="diskon" class="form-control" value={this.state.diskon} onChange={ev => this.setState({ diskon: ev.target.value })} />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button className="btn btn-danger" onClick={this.proses}>Hitung</button>
                    <hr />
                    <h6>Harga Akhir</h6>
                    <input className="form form-control" name="hasil" value={"Rp. " + this.state.hasil + ",00"} disabled />
                </div>
            </center>
        );
    }
}

export default Total;