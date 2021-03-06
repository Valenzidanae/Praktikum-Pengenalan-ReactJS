import React from 'react'
import './Hexa.css'

class Hexa extends React.Component {
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

        if (konversi == 16) {
            this.setState({ nilai_akhir: nilai_awal })
        }
        else if (konversi == 10) {
            let hek = nilai_awal
            let des = parseInt(hek, 16)
            this.setState({ nilai_akhir: des })
        }
        else if (konversi == 2) {
            let hek = nilai_awal
            let des = parseInt(hek, 16)
            let bin = des.toString(2)
            this.setState({ nilai_akhir: bin })
        }
        else if (konversi == 8) {
            let hek = nilai_awal
            let des = parseInt(hek, 16)
            let okt = des.toString(8)
            this.setState({ nilai_akhir: okt })
        }
    }
    render() {
        return (
            <center>
                <div className="layer1">
                    <div className="titlelayer">
                        <h6>Konversi Bilangan Hexadesimal</h6>
                    </div>
                    <table>

                        <tr>
                            <td>
                                <div class="form-group">
                                    <label name="pilihan" value="16">Hexadesimal</label>
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
                    <button className="btn btn-danger" onClick={this.proses}>Convert</button>
                    <hr />
                    <h6>Hasil</h6>
                    <input className="form form-control" name="hasil" value={this.state.nilai_akhir} disabled />
                </div>
            </center>
        );
    }
}
export default Hexa;