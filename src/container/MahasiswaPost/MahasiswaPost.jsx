import React, {Component} from "react";
import Post from '../../component/MahasiswaPost/Post';
import API from '../../services/index';


class MahasiswaPost extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa:{
            NIM: "",
            id: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        API.deleteNewsMahasiswa(data)
        .then( (response) => {
            this.ambilDataDariServerAPI(); 
        });
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp; 
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState( {
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        API.postNewsMahasiswa(this.state.insertMahasiswa)
        .then( (response) => {
            this.ambilDataDariServerAPI(); 
        });
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Form Mahasiswa</h2>
                <div className="card bg-warning">
                    <form class="container py-3">
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                            <label for="NIM">NIM</label>
                            <input type="text" class="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                            <div class="col-md-8 mb-3">
                            <label for="nama">Nama</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                            <label for="alamat">Alamat</label>
                            <input type="textarea" class="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                            <label for="hp">No HP</label>
                            <input type="text" class="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                            <div class="col-md-4 mb-3">
                            <label for="angkatan">Angkatan</label>
                            <input type="text" class="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                            <div class="col-md-4 mb-3">
                            <label for="status">Status</label>
                            <input type="text" class="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa} required/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                    </form>
                </div>
                <br />
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(Mahasiswa => {
                        return <Post key={Mahasiswa.id} NIM={Mahasiswa.NIM} nama={Mahasiswa.nama} alamat={Mahasiswa.alamat} hp={Mahasiswa.hp} angkatan={Mahasiswa.angkatan} status={Mahasiswa.status} idMahasiswa={Mahasiswa.id} hapusMahasiswa = {this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;

