import React, {Component} from "react";
import './BlogPost.css';
import Post from '../../component/BlogPost/Post';
import API from '../../services';

class BlogPost extends Component{
    state = {               // komponen state dari React untuk statefull component
        listArtikel:[],      // variabel array yang digunakan untuk menyimpan data API
        insertArtikel:{     // variabel yang digunakan untuk manampung sementara data yanag akan di insert
            userId: 1,      // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount(){    // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI() // ambil data dari server local
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(data)
        .then( (response) => {
            this.ambilDataDariServerAPI(); 
        });
    }

    handleTambahArtikel = (event) => {      // fungsi untuk meng-handle form tambah data artikel
        let formInsertArtikel = {...this.state.insertArtikel};  // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();   //digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp; 
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onChange ke formInsertArtikel sesuai dengan target yang diisi
        this.setState( {
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {        // fungsi untuk meng-handle tombol simpan
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Form Artikel</h2>
                <div className="card border-primary container py-1">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" cols="30" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm btn-warning" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;