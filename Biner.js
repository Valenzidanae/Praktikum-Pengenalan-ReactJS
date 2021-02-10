import React from 'react'
import './Biner.css'

class Biner extends React.Component {
    constructor() {
        super();
        this.state = {
            pilihan: '',
            konversi: '',
            nilai_awal: 0,
            nilai_akhir: ''
        }
    }

    pilihan = (event) => {
        this.setState({ pilihan: event.target.value });
    }

    konversi = (event) => {
        this.setState({ konversi: event.target.value });
    }

    nilai_awal = (event) => {
        this.setState({ nilai_awal: event.target.value });
    }

    proses = () => {
        let pilihan = this.state.pilihan
        let konversi = this.state.konversi
        let nilai_awal = this.state.nilai_awal

        if (konversi == 2) {
            this.setState({ nilai_akhir: nilai_awal })
        }
        else if (konversi == 8) {
            let bin = nilai_awal * 1
            let des = parseInt(bin, 2)
            let okt = des.toString(8)
            this.setState({ nilai_akhir: okt })
        }
        else if (konversi == 10) {
            let bin = nilai_awal * 1
            let des = parseInt(bin, 2)
            this.setState({ nilai_akhir: des })
        }
        else if (konversi == 16) {
            let bin = nilai_awal * 1
            let des = parseInt(bin, 2)
            let hex = des.toString(16).toUpperCase()
            this.setState({ nilai_akhir: hex })
        }
    }
    render() {
        return (
            <center>
                <div className="layer1">
                    <div className="titlelayer">
                        <h6>Konversi Bilangan Biner</h6>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label name="pilihan" value="2">Biner</label>
                                    <input name="nilai_awal" class="form-control" onChange={this.nilai_awal} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <label >Pilihan Konversi</label>
                                    <select className="form-control" name="konversi" onChange={this.konversi}>
                                        <option>Pilih Konversi -</option>
                                        <option name="konversi" value="2">Biner</option>
                                        <option name="konversi" value="8">Oktal</option>
                                        <option name="konversi" value="10">Desimal</option>
                                        <option name="konversi" value="16">Hexadesimal</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button className="btn btn-danger" onClick={this.proses}>Konversikan</button>
                    <hr />
                    <h6>Hasil</h6>
                    <input className="form form-control" name="hasil" value={this.state.nilai_akhir} disabled />
                </div>
            </center>
        );
    }
}
export default Biner;